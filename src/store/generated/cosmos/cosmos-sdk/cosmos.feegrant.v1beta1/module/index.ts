// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgGrantAllowance } from "./types/cosmos/feegrant/v1beta1/tx";
import { MsgRevokeAllowance } from "./types/cosmos/feegrant/v1beta1/tx";


const types = [
  ["/cosmos.feegrant.v1beta1.MsgGrantAllowance", MsgGrantAllowance],
  ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", MsgRevokeAllowance],

];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://137.184.87.197:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgGrantAllowance: (data: MsgGrantAllowance): EncodeObject => ({ typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance", value: data }),
    msgRevokeAllowance: (data: MsgRevokeAllowance): EncodeObject => ({ typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance", value: data }),

  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://137.184.87.197:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};