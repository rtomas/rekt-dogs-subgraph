import { Bytes, BigInt } from "@graphprotocol/graph-ts";
import { integer } from "@protofire/subgraph-toolkit";
import { DailySnapshot, DogsInfo, MonthlySnapshot } from "../../../generated/schema";

export namespace dogs {
    export namespace helpers {
        export const SECONDS_PER_DAY = 24 * 60 * 60;
        export const SECONDS_PER_MONTH = 30 * SECONDS_PER_DAY;
        export const BIGINT_ZERO = BigInt.fromI32(0);
    }
    export function getOrCreateDogsInfo(num: String): DogsInfo {
        let id = num.toString();

        let dogs = DogsInfo.load(id);
        if (dogs == null) {
            dogs = new DogsInfo(id);
            dogs.numOwners = helpers.BIGINT_ZERO;
            dogs.numTokens = helpers.BIGINT_ZERO;
            dogs.numAccounts = helpers.BIGINT_ZERO;
            dogs.lastMintDate = helpers.BIGINT_ZERO;
            dogs.lastTransferDate = helpers.BIGINT_ZERO;
            dogs.lastBurned = helpers.BIGINT_ZERO;
        }
        return dogs as DogsInfo;
    }

    export function getOrCreateDailySnapshot(timestamp: BigInt): DailySnapshot {
        const id = ((timestamp.toI32() / helpers.SECONDS_PER_DAY) * helpers.SECONDS_PER_DAY).toString();

        let snapshot = DailySnapshot.load(id);
        if (snapshot == null) {
            let BIGINT_ZERO = BigInt.fromI32(0);

            snapshot = new DailySnapshot(id);
            snapshot.numOwners = BIGINT_ZERO;
            snapshot.dailyTransfersCount = 0;
        }
        return snapshot as DailySnapshot;
    }

    export function getOrCreateMonthlySnapshot(timestamp: BigInt): MonthlySnapshot {
        const id = ((timestamp.toI32() / helpers.SECONDS_PER_MONTH) * helpers.SECONDS_PER_MONTH).toString();

        let snapshot = MonthlySnapshot.load(id);
        if (snapshot == null) {
            let BIGINT_ZERO = BigInt.fromI32(0);

            snapshot = new MonthlySnapshot(id);
            snapshot.numOwners = BIGINT_ZERO;

            snapshot.monthlyTransfersCount = 0;
        }
        return snapshot as MonthlySnapshot;
    }
}
