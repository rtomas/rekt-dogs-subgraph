import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  ConsecutiveTransfer,
  DisableIncreaseMaxMintableSupply,
  OwnershipTransferred,
  PermanentBaseURI,
  SetActiveStage,
  SetBaseURI,
  SetCosigner,
  SetCrossmintAddress,
  SetGlobalWalletLimit,
  SetMaxMintableSupply,
  SetMintable,
  SetTimestampExpirySeconds,
  Transfer,
  UpdateStage,
  Withdraw
} from "../generated/ERC721MIncreasableOperatorFilterer/ERC721MIncreasableOperatorFilterer"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createConsecutiveTransferEvent(
  fromTokenId: BigInt,
  toTokenId: BigInt,
  from: Address,
  to: Address
): ConsecutiveTransfer {
  let consecutiveTransferEvent = changetype<ConsecutiveTransfer>(newMockEvent())

  consecutiveTransferEvent.parameters = new Array()

  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam(
      "fromTokenId",
      ethereum.Value.fromUnsignedBigInt(fromTokenId)
    )
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam(
      "toTokenId",
      ethereum.Value.fromUnsignedBigInt(toTokenId)
    )
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return consecutiveTransferEvent
}

export function createDisableIncreaseMaxMintableSupplyEvent(): DisableIncreaseMaxMintableSupply {
  let disableIncreaseMaxMintableSupplyEvent = changetype<
    DisableIncreaseMaxMintableSupply
  >(newMockEvent())

  disableIncreaseMaxMintableSupplyEvent.parameters = new Array()

  return disableIncreaseMaxMintableSupplyEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPermanentBaseURIEvent(baseURI: string): PermanentBaseURI {
  let permanentBaseUriEvent = changetype<PermanentBaseURI>(newMockEvent())

  permanentBaseUriEvent.parameters = new Array()

  permanentBaseUriEvent.parameters.push(
    new ethereum.EventParam("baseURI", ethereum.Value.fromString(baseURI))
  )

  return permanentBaseUriEvent
}

export function createSetActiveStageEvent(activeStage: BigInt): SetActiveStage {
  let setActiveStageEvent = changetype<SetActiveStage>(newMockEvent())

  setActiveStageEvent.parameters = new Array()

  setActiveStageEvent.parameters.push(
    new ethereum.EventParam(
      "activeStage",
      ethereum.Value.fromUnsignedBigInt(activeStage)
    )
  )

  return setActiveStageEvent
}

export function createSetBaseURIEvent(baseURI: string): SetBaseURI {
  let setBaseUriEvent = changetype<SetBaseURI>(newMockEvent())

  setBaseUriEvent.parameters = new Array()

  setBaseUriEvent.parameters.push(
    new ethereum.EventParam("baseURI", ethereum.Value.fromString(baseURI))
  )

  return setBaseUriEvent
}

export function createSetCosignerEvent(cosigner: Address): SetCosigner {
  let setCosignerEvent = changetype<SetCosigner>(newMockEvent())

  setCosignerEvent.parameters = new Array()

  setCosignerEvent.parameters.push(
    new ethereum.EventParam("cosigner", ethereum.Value.fromAddress(cosigner))
  )

  return setCosignerEvent
}

export function createSetCrossmintAddressEvent(
  crossmintAddress: Address
): SetCrossmintAddress {
  let setCrossmintAddressEvent = changetype<SetCrossmintAddress>(newMockEvent())

  setCrossmintAddressEvent.parameters = new Array()

  setCrossmintAddressEvent.parameters.push(
    new ethereum.EventParam(
      "crossmintAddress",
      ethereum.Value.fromAddress(crossmintAddress)
    )
  )

  return setCrossmintAddressEvent
}

export function createSetGlobalWalletLimitEvent(
  globalWalletLimit: BigInt
): SetGlobalWalletLimit {
  let setGlobalWalletLimitEvent = changetype<SetGlobalWalletLimit>(
    newMockEvent()
  )

  setGlobalWalletLimitEvent.parameters = new Array()

  setGlobalWalletLimitEvent.parameters.push(
    new ethereum.EventParam(
      "globalWalletLimit",
      ethereum.Value.fromUnsignedBigInt(globalWalletLimit)
    )
  )

  return setGlobalWalletLimitEvent
}

export function createSetMaxMintableSupplyEvent(
  maxMintableSupply: BigInt
): SetMaxMintableSupply {
  let setMaxMintableSupplyEvent = changetype<SetMaxMintableSupply>(
    newMockEvent()
  )

  setMaxMintableSupplyEvent.parameters = new Array()

  setMaxMintableSupplyEvent.parameters.push(
    new ethereum.EventParam(
      "maxMintableSupply",
      ethereum.Value.fromUnsignedBigInt(maxMintableSupply)
    )
  )

  return setMaxMintableSupplyEvent
}

export function createSetMintableEvent(mintable: boolean): SetMintable {
  let setMintableEvent = changetype<SetMintable>(newMockEvent())

  setMintableEvent.parameters = new Array()

  setMintableEvent.parameters.push(
    new ethereum.EventParam("mintable", ethereum.Value.fromBoolean(mintable))
  )

  return setMintableEvent
}

export function createSetTimestampExpirySecondsEvent(
  expiry: BigInt
): SetTimestampExpirySeconds {
  let setTimestampExpirySecondsEvent = changetype<SetTimestampExpirySeconds>(
    newMockEvent()
  )

  setTimestampExpirySecondsEvent.parameters = new Array()

  setTimestampExpirySecondsEvent.parameters.push(
    new ethereum.EventParam("expiry", ethereum.Value.fromUnsignedBigInt(expiry))
  )

  return setTimestampExpirySecondsEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createUpdateStageEvent(
  stage: BigInt,
  price: BigInt,
  walletLimit: BigInt,
  merkleRoot: Bytes,
  maxStageSupply: i32,
  startTimeUnixSeconds: BigInt,
  endTimeUnixSeconds: BigInt
): UpdateStage {
  let updateStageEvent = changetype<UpdateStage>(newMockEvent())

  updateStageEvent.parameters = new Array()

  updateStageEvent.parameters.push(
    new ethereum.EventParam("stage", ethereum.Value.fromUnsignedBigInt(stage))
  )
  updateStageEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  updateStageEvent.parameters.push(
    new ethereum.EventParam(
      "walletLimit",
      ethereum.Value.fromUnsignedBigInt(walletLimit)
    )
  )
  updateStageEvent.parameters.push(
    new ethereum.EventParam(
      "merkleRoot",
      ethereum.Value.fromFixedBytes(merkleRoot)
    )
  )
  updateStageEvent.parameters.push(
    new ethereum.EventParam(
      "maxStageSupply",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(maxStageSupply))
    )
  )
  updateStageEvent.parameters.push(
    new ethereum.EventParam(
      "startTimeUnixSeconds",
      ethereum.Value.fromUnsignedBigInt(startTimeUnixSeconds)
    )
  )
  updateStageEvent.parameters.push(
    new ethereum.EventParam(
      "endTimeUnixSeconds",
      ethereum.Value.fromUnsignedBigInt(endTimeUnixSeconds)
    )
  )

  return updateStageEvent
}

export function createWithdrawEvent(value: BigInt): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return withdrawEvent
}
