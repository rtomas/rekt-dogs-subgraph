import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  ConsecutiveTransfer as ConsecutiveTransferEvent,
  DisableIncreaseMaxMintableSupply as DisableIncreaseMaxMintableSupplyEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PermanentBaseURI as PermanentBaseURIEvent,
  SetActiveStage as SetActiveStageEvent,
  SetBaseURI as SetBaseURIEvent,
  SetCosigner as SetCosignerEvent,
  SetCrossmintAddress as SetCrossmintAddressEvent,
  SetGlobalWalletLimit as SetGlobalWalletLimitEvent,
  SetMaxMintableSupply as SetMaxMintableSupplyEvent,
  SetMintable as SetMintableEvent,
  SetTimestampExpirySeconds as SetTimestampExpirySecondsEvent,
  Transfer as TransferEvent,
  UpdateStage as UpdateStageEvent,
  Withdraw as WithdrawEvent
} from "../generated/ERC721MIncreasableOperatorFilterer/ERC721MIncreasableOperatorFilterer"
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
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleConsecutiveTransfer(
  event: ConsecutiveTransferEvent
): void {
  let entity = new ConsecutiveTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fromTokenId = event.params.fromTokenId
  entity.toTokenId = event.params.toTokenId
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisableIncreaseMaxMintableSupply(
  event: DisableIncreaseMaxMintableSupplyEvent
): void {
  let entity = new DisableIncreaseMaxMintableSupply(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePermanentBaseURI(event: PermanentBaseURIEvent): void {
  let entity = new PermanentBaseURI(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.baseURI = event.params.baseURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetActiveStage(event: SetActiveStageEvent): void {
  let entity = new SetActiveStage(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.activeStage = event.params.activeStage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetBaseURI(event: SetBaseURIEvent): void {
  let entity = new SetBaseURI(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.baseURI = event.params.baseURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetCosigner(event: SetCosignerEvent): void {
  let entity = new SetCosigner(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.cosigner = event.params.cosigner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetCrossmintAddress(
  event: SetCrossmintAddressEvent
): void {
  let entity = new SetCrossmintAddress(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.crossmintAddress = event.params.crossmintAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetGlobalWalletLimit(
  event: SetGlobalWalletLimitEvent
): void {
  let entity = new SetGlobalWalletLimit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.globalWalletLimit = event.params.globalWalletLimit

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetMaxMintableSupply(
  event: SetMaxMintableSupplyEvent
): void {
  let entity = new SetMaxMintableSupply(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.maxMintableSupply = event.params.maxMintableSupply

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetMintable(event: SetMintableEvent): void {
  let entity = new SetMintable(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.mintable = event.params.mintable

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetTimestampExpirySeconds(
  event: SetTimestampExpirySecondsEvent
): void {
  let entity = new SetTimestampExpirySeconds(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.expiry = event.params.expiry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateStage(event: UpdateStageEvent): void {
  let entity = new UpdateStage(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.stage = event.params.stage
  entity.price = event.params.price
  entity.walletLimit = event.params.walletLimit
  entity.merkleRoot = event.params.merkleRoot
  entity.maxStageSupply = event.params.maxStageSupply
  entity.startTimeUnixSeconds = event.params.startTimeUnixSeconds
  entity.endTimeUnixSeconds = event.params.endTimeUnixSeconds

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
