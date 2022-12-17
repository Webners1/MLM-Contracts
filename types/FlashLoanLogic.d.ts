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

interface FlashLoanLogicInterface extends ethers.utils.Interface {
  functions: {};

  events: {
    "FlashLoan(address,address,address,uint256,uint8,uint256,uint16)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FlashLoan"): EventFragment;
}

export type FlashLoanEvent = TypedEvent<
  [string, string, string, BigNumber, number, BigNumber, number] & {
    target: string;
    initiator: string;
    asset: string;
    amount: BigNumber;
    interestRateMode: number;
    premium: BigNumber;
    referralCode: number;
  }
>;

export class FlashLoanLogic extends BaseContract {
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

  interface: FlashLoanLogicInterface;

  functions: {};

  callStatic: {};

  filters: {
    "FlashLoan(address,address,address,uint256,uint8,uint256,uint16)"(
      target?: string | null,
      initiator?: null,
      asset?: string | null,
      amount?: null,
      interestRateMode?: null,
      premium?: null,
      referralCode?: BigNumberish | null
    ): TypedEventFilter<
      [string, string, string, BigNumber, number, BigNumber, number],
      {
        target: string;
        initiator: string;
        asset: string;
        amount: BigNumber;
        interestRateMode: number;
        premium: BigNumber;
        referralCode: number;
      }
    >;

    FlashLoan(
      target?: string | null,
      initiator?: null,
      asset?: string | null,
      amount?: null,
      interestRateMode?: null,
      premium?: null,
      referralCode?: BigNumberish | null
    ): TypedEventFilter<
      [string, string, string, BigNumber, number, BigNumber, number],
      {
        target: string;
        initiator: string;
        asset: string;
        amount: BigNumber;
        interestRateMode: number;
        premium: BigNumber;
        referralCode: number;
      }
    >;
  };

  estimateGas: {};

  populateTransaction: {};
}
