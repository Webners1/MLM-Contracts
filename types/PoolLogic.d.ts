/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PoolLogicInterface extends ethers.utils.Interface {
  functions: {};

  events: {
    "IsolationModeTotalDebtUpdated(address,uint256)": EventFragment;
    "MintedToTreasury(address,uint256)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "IsolationModeTotalDebtUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintedToTreasury"): EventFragment;
}

export type IsolationModeTotalDebtUpdatedEvent = TypedEvent<
  [string, BigNumber] & { asset: string; totalDebt: BigNumber }
>;

export type MintedToTreasuryEvent = TypedEvent<
  [string, BigNumber] & { reserve: string; amountMinted: BigNumber }
>;

export class PoolLogic extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PoolLogicInterface;

  functions: {};

  callStatic: {};

  filters: {
    "IsolationModeTotalDebtUpdated(address,uint256)"(
      asset?: string | null,
      totalDebt?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { asset: string; totalDebt: BigNumber }
    >;

    IsolationModeTotalDebtUpdated(
      asset?: string | null,
      totalDebt?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { asset: string; totalDebt: BigNumber }
    >;

    "MintedToTreasury(address,uint256)"(
      reserve?: string | null,
      amountMinted?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { reserve: string; amountMinted: BigNumber }
    >;

    MintedToTreasury(
      reserve?: string | null,
      amountMinted?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { reserve: string; amountMinted: BigNumber }
    >;
  };

  estimateGas: {};

  populateTransaction: {};
}