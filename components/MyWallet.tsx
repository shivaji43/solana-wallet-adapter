"use client"

import { NextPage } from "next";
import { FC, ReactNode, useMemo} from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  clusterApiUrl,
  Transaction,
  PublicKey,
  SystemProgram,
} from "@solana/web3.js";
 
const Wallet: NextPage = props => {
  const endpoint = clusterApiUrl("devnet");
  const wallets = useMemo(() => [], []);
 
  return (
    
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <WalletMultiButton />
          <p>Put the rest of your app here</p>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    
    
  );
};
 
export default Wallet;