import { BigInt } from "@graphprotocol/graph-ts"
import {
  DodgeDealer,
  Approval,
  EnableAccountStaking,
  EnableStaking,
  EnableSwapAndLiquify,
  ExcludeFromFees,
  GasForProcessingUpdated,
  LeaderboardCompletion,
  LiquidityWalletUpdated,
  OwnershipTransferred,
  ProcessedDividendTracker,
  ReferralRewards,
  ReferredBy,
  SendDividends,
  SetAutomatedMarketMakerPair,
  SetPreSaleWallet,
  SwapAndLiquify,
  TradingEnabled,
  Transfer,
  UpdateAllowTokens,
  UpdateDividendTracker,
  UpdateFees,
  UpdateFeesReferred,
  UpdatePayoutToken,
  UpdateReferralTreeFees,
  UpdateStakingAmounts,
  UpdateUniswapV2Router
} from "../generated/DodgeDealer/DodgeDealer"
import { ExampleEntity } from "../generated/schema"
import { ReferralRewardsEntity } from './entities/ReferralRewardsEntity';
import { ReferredByEntity } from './entities/ReferredByEntity';

export function handleApproval(event: Approval): void {}

export function handleEnableAccountStaking(event: EnableAccountStaking): void {}

export function handleEnableStaking(event: EnableStaking): void {}

export function handleEnableSwapAndLiquify(event: EnableSwapAndLiquify): void {}

export function handleExcludeFromFees(event: ExcludeFromFees): void {}

export function handleGasForProcessingUpdated(
  event: GasForProcessingUpdated
): void {}

export function handleLeaderboardCompletion(
  event: LeaderboardCompletion
): void {}

export function handleLiquidityWalletUpdated(
  event: LiquidityWalletUpdated
): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleProcessedDividendTracker(
  event: ProcessedDividendTracker
): void {}

export function handleReferralRewards(event: ReferralRewards): void {

  let val = new ReferralRewardsEntity(event.transaction.from.toHex())
  val.by = event.params.by;
  val.to = event.params.to;
  val.amount = event.params.amount;
  val.iterationDaily = event.params.iterationDaily;
  val.iterationWeekly = event.params.iterationWeekly;
  val.iterationMonthly = event.params.iterationMonthly;
  val.treePosition = event.params.treePosition;
  val.save()
}

export function handleReferredBy(event: ReferredBy): void {

  let val = new ReferredByEntity(event.transaction.from.toHex())
  val.by = event.params.by;
  val.Referrer = event.params.Referrer;
  val.iterationDaily = event.params.iterationDaily;
  val.iterationWeekly = event.params.iterationWeekly;
  val.iterationMonthly = event.params.iterationMonthly;
  val.save()
}

export function handleSendDividends(event: SendDividends): void {}

export function handleSetAutomatedMarketMakerPair(
  event: SetAutomatedMarketMakerPair
): void {}

export function handleSetPreSaleWallet(event: SetPreSaleWallet): void {}

export function handleSwapAndLiquify(event: SwapAndLiquify): void {}

export function handleTradingEnabled(event: TradingEnabled): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUpdateAllowTokens(event: UpdateAllowTokens): void {}

export function handleUpdateDividendTracker(
  event: UpdateDividendTracker
): void {}

export function handleUpdateFees(event: UpdateFees): void {}

export function handleUpdateFeesReferred(event: UpdateFeesReferred): void {}

export function handleUpdatePayoutToken(event: UpdatePayoutToken): void {}

export function handleUpdateReferralTreeFees(
  event: UpdateReferralTreeFees
): void {}

export function handleUpdateStakingAmounts(event: UpdateStakingAmounts): void {}

export function handleUpdateUniswapV2Router(
  event: UpdateUniswapV2Router
): void {}
