import { ADDRESS_ZERO, integer } from "@protofire/subgraph-toolkit";
import { Transfer } from "../../generated/ERC721MIncreasableOperatorFilterer/ERC721MIncreasableOperatorFilterer";

import { transfer } from "./transfer";

import { dogs, blocks } from "../modules";
import { BigInt } from "@graphprotocol/graph-ts";

let DOGS_ID = ADDRESS_ZERO;

let BASE_URI = "https://opensea.io/assets/matic/0xace8187b113a38f83bd9c896c6878b175c234dcc/";

export function handleTransfer(event: Transfer): void {
    let from = event.params.from;
    let to = event.params.to;
    let tokenId = event.params.tokenId;
    let blockNumber = event.block.number;
    let blockId = blockNumber.toString();
    let timestamp = event.block.timestamp;

    dogs.getOrCreateDogsInfo(DOGS_ID);

    let block = blocks.getOrCreateBlock(blockId, timestamp, blockNumber);
    block.save();

    if (from.toHex() == ADDRESS_ZERO) {
        transfer.handleMint(to, tokenId, timestamp, blockId, DOGS_ID, BASE_URI);
    } else if (to.toHex() == ADDRESS_ZERO) {
        transfer.handleBurn(from, tokenId, timestamp, blockId, DOGS_ID);
    } else {
        transfer.handleRegularTransfer(from, to, tokenId, timestamp, blockId, DOGS_ID);
    }
}
