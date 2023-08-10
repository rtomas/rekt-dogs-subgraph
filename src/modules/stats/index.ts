import { Bytes, BigInt } from "@graphprotocol/graph-ts";
import { integer } from "@protofire/subgraph-toolkit";
import { DailySnapshot, DogsInfo } from "../../../generated/schema";

export namespace dogs {
    export namespace helpers {
        export const SECONDS_PER_DAY = 24 * 60 * 60;
    }
    export function getOrCreateDogsInfo(num: String): DogsInfo {
        let id = num.toString();

        let dogs = DogsInfo.load(id);
        if (dogs == null) {
            dogs = new DogsInfo(id);
            dogs.numOwners = integer.ZERO;
            dogs.numTokens = integer.ZERO;
        }
        return dogs as DogsInfo;
    }

    export function getOrCreateDailySnapshot(timestamp: BigInt): DailySnapshot {
        const id = (timestamp.toI32() / helpers.SECONDS_PER_DAY).toString();

        let snapshot = DailySnapshot.load(id);
        if (snapshot == null) {
            let BIGINT_ZERO = BigInt.fromI32(0);

            snapshot = new DailySnapshot(id);
            snapshot.blockNumber = BIGINT_ZERO;
            snapshot.timestamp = BIGINT_ZERO;
            snapshot.numOwners = BIGINT_ZERO;
            snapshot.dailyTransfersCount = 0;
        }
        return snapshot as DailySnapshot;
    }
}
