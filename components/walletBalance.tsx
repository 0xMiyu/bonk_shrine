import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
    Transaction,
    LAMPORTS_PER_SOL,
    TransactionSignature,
    SystemProgram,
    PublicKey,
    Keypair,
    GetProgramAccountsFilter,
    Connection,
} from "@solana/web3.js";
import { FC, useCallback, useState, useRef, createElement } from "react";
import {
    getAssociatedTokenAddress,
    createTransferCheckedInstruction,
    TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { useOutsideAlerter } from "./kewk";
import styles from "../styles/Home.module.css";
import { createRoot } from "react-dom/client";
import { FortuneElement } from "./fortune";

export const walletBalance: FC = () => {
    const RECEIVING_BONK_ATA = "5rmWy289CSN1XbHeRRQLwiv6ed3k64ipgKCzdpoFAX3E";
    const MINT_TO_SEARCH = "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263";
    const WALLET_TO_SEARCH = "FkvNBs5TruvbAuUkrKdBXZW9zJSrRi6ZrV8n5Fjnad7F";
    const rpcEndpoint = 'https://rpc.helius.xyz/?api-key=60219cb7-35dc-425a-928b-c7be0fc8ebf4';
    const solanaConnection = new Connection(rpcEndpoint)
    async function getTokenAccounts(
        wallet: string,
        solanaConnection: Connection
    ) {
        const filters: GetProgramAccountsFilter[] = [
            {
                dataSize: 165, //size of account (bytes)
            },
            {
                memcmp: {
                    offset: 32, //location of our query in the account (bytes)
                    bytes: wallet, //our search criteria, a base58 encoded string
                },
            },
            //Add this search parameter
            {
                memcmp: {
                    offset: 0, //number of bytes
                    bytes: MINT_TO_SEARCH, //base58 encoded string
                },
            },
        ];
    }
    // const res = await solanaConnection.getParsedProgramAccounts(
    //     TOKEN_PROGRAM_ID,   //SPL Token Program, new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
    //     {filters: filters}
    // )

    return (<div></div>);
};
