import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import { integer } from "@protofire/subgraph-toolkit";
import { accounts, transactions, tokens, dogs, blocks } from "../modules";

export namespace transfer {
    export function handleMint(to: Bytes, tokenId: BigInt, timestamp: BigInt, blockId: string, dogsInfoId: string, baseURI: string): void {
        let tokenIdStr = tokenId.toString();
        let isNewAccount = false;
        if (!accounts.isAccountExist(to)) isNewAccount = true;

        let account = accounts.getOrCreateAccount(to);

        let numTokenBefore = account.numTokens;

        account.numTokens = account.numTokens.plus(integer.ONE);
        account.save();

        let token = tokens.mintToken(tokenIdStr, to.toHex());

        token.uri = tokens.helpers.getCompleteURI(baseURI, tokenIdStr);
        token.burned = false;
        token.tokenID = tokenId;
        token.save();

        let dogsInfo = dogs.getOrCreateDogsInfo(dogsInfoId);

        // add general info
        dogsInfo.numTokens = dogsInfo.numTokens.plus(integer.ONE);
        dogsInfo.lastMintDate = timestamp;

        // if numtokens is 1, then it is a new owner
        if (account.numTokens.equals(integer.ONE)) {
            dogsInfo.numOwners = dogsInfo.numOwners.plus(integer.ONE);
        }
        if (isNewAccount) {
            dogsInfo.numAccounts = dogsInfo.numAccounts.plus(integer.ONE);
        }
        dogsInfo.save();

        let transaction = transactions.getNewMint(account.id, tokenIdStr, timestamp, blockId);
        transaction.save();
    }

    export function handleBurn(from: Bytes, tokenId: BigInt, timestamp: BigInt, blockId: string, dogsInfoid: string): void {
        let tokenIdStr = tokenId.toString();

        let account = accounts.getOrCreateAccount(from);
        let numTokenBefore = account.numTokens;
        account.numTokens = account.numTokens.minus(integer.ONE);
        account.save();

        let token = tokens.burnToken(tokenIdStr);
        token.burned = true;
        token.save();

        let dogsInfo = dogs.getOrCreateDogsInfo(dogsInfoid);
        dogsInfo.numTokens = dogsInfo.numTokens.minus(integer.ONE);
        dogsInfo.lastBurned = timestamp;

        // if token is 0, one less owner
        if (account.numTokens.equals(integer.ZERO)) {
            dogsInfo.numOwners = dogsInfo.numOwners.minus(integer.ONE);
        }
        dogsInfo.save();

        let transaction = transactions.getNewBurn(account.id, tokenIdStr, timestamp, blockId);
        transaction.save();
    }

    export function handleRegularTransfer(from: Bytes, to: Bytes, tokenId: BigInt, timestamp: BigInt, blockId: string, dogsInfoId: string): void {
        let tokenIdStr = tokenId.toString();

        let seller = accounts.getOrCreateAccount(from);

        seller.numTokens = seller.numTokens.minus(integer.ONE);
        seller.save();

        let buyer = accounts.getOrCreateAccount(to);

        buyer.numTokens = buyer.numTokens.plus(integer.ONE);
        buyer.save();

        let token = tokens.changeOwner(tokenIdStr, buyer.id);
        token.save();

        let dogsInfo = dogs.getOrCreateDogsInfo(dogsInfoId);
        dogsInfo.lastTransferDate = timestamp;

        if (seller.numTokens.equals(integer.ZERO)) {
            dogsInfo.numOwners = dogsInfo.numOwners.minus(integer.ONE);
        }
        if (buyer.numTokens.equals(integer.ONE)) {
            dogsInfo.numOwners = dogsInfo.numOwners.plus(integer.ONE);
        }
        dogsInfo.save();

        let transaction = transactions.getNewTransfer(seller.id, buyer.id, tokenIdStr, timestamp, blockId);
        transaction.save();
    }
}
