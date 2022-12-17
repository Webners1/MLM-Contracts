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
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ICreditDelegationTokenInterface extends ethers.utils.Interface {
  functions: {
    "approveDelegation(address,uint256)": FunctionFragment;
    "borrowAllowance(address,address)": FunctionFragment;
    "delegationWithSig(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approveDelegation",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowAllowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "delegationWithSig",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveDelegation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegationWithSig",
    data: BytesLike
  ): Result;

  events: {
    "BorrowAllowanceDelegated(address,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BorrowAllowanceDelegated"): EventFragment;
}

export type BorrowAllowanceDelegatedEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    fromUser: string;
    toUser: string;
    asset: string;
    amount: BigNumber;
  }
>;

export class ICreditDelegationToken extends BaseContract {
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

  interface: ICreditDelegationTokenInterface;

  functions: {
    approveDelegation(
      delegatee: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    borrowAllowance(
      fromUser: string,
      toUser: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    delegationWithSig(
      delegator: string,
      delegatee: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  approveDelegation(
    delegatee: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  borrowAllowance(
    fromUser: string,
    toUser: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  delegationWithSig(
    delegator: string,
    delegatee: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approveDelegation(
      delegatee: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    borrowAllowance(
      fromUser: string,
      toUser: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delegationWithSig(
      delegator: string,
      delegatee: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BorrowAllowanceDelegated(address,address,address,uint256)"(
      fromUser?: string | null,
      toUser?: string | null,
      asset?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { fromUser: string; toUser: string; asset: string; amount: BigNumber }
    >;

    BorrowAllowanceDelegated(
      fromUser?: string | null,
      toUser?: string | null,
      asset?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { fromUser: string; toUser: string; asset: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    approveDelegation(
      delegatee: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    borrowAllowance(
      fromUser: string,
      toUser: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delegationWithSig(
      delegator: string,
      delegatee: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveDelegation(
      delegatee: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    borrowAllowance(
      fromUser: string,
      toUser: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delegationWithSig(
      delegator: string,
      delegatee: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
