import {
    PublicKey,
    Connection
} from "@solana/web3.js";
import { FC, useState, useEffect } from "react";


export const WalletBalance: FC = () => {
    const RECEIVING_BONK_ATA = "B7Zw8g26Pdtm9zBFkkyqurhE9mwVLKgg45U2RfnEjmoA";
    // const BONK_MINT = "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263";
    const RECEIVING_WALLET = "AoyyDYXKjvF1ooTvRRgUgRU2tAf9dvt23AgHk7tco5a9";
    const rpcEndpoint = process.env.RPC_ENDPOINT
    const solanaConnection = new Connection(rpcEndpoint!)

    const [balance, setBalance] = useState([] as any);
    useEffect  (() => {
        const load_response = async () => {
            const response = await solanaConnection.getParsedAccountInfo(new PublicKey(RECEIVING_BONK_ATA))
            // console.log("RESPONSE")
            const response_data : any = response.value?.data
            // console.log(response_data!.parsed.info.tokenAmount.uiAmount)
            setBalance(response_data!.parsed.info.tokenAmount.uiAmount);
            
        }
        load_response();
        
    }, [])
    
    
    

    return (
        <div>
            <p><a href="https://solana.fm/address/AoyyDYXKjvF1ooTvRRgUgRU2tAf9dvt23AgHk7tco5a9" target="_blank">Wallet Address: {RECEIVING_WALLET}</a></p>
            <p>Wallet Balance: {balance} $BONK</p>
        </div>
    );
};
