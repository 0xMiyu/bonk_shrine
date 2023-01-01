import {
    PublicKey,
    Connection
} from "@solana/web3.js";
import { FC, useState, useEffect } from "react";


export const WalletBalance: FC = () => {
    const RECEIVING_BONK_ATA = "B7Zw8g26Pdtm9zBFkkyqurhE9mwVLKgg45U2RfnEjmoA";
    // const BONK_MINT = "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263";
    const RECEIVING_WALLET = "AoyyDYXKjvF1ooTvRRgUgRU2tAf9dvt23AgHk7tco5a9";
    const rpcEndpoint = 'https://rpc.helius.xyz/?api-key=60219cb7-35dc-425a-928b-c7be0fc8ebf4';
    const solanaConnection = new Connection(rpcEndpoint)

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
            <h3>Wallet Address: {RECEIVING_WALLET}</h3>
            <h3>Wallet Balance: {balance} $BONK</h3>
        </div>
    );
};
