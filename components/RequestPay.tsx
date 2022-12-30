import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
    Transaction,
    LAMPORTS_PER_SOL,
    TransactionSignature,
    SystemProgram,
    PublicKey,
} from "@solana/web3.js";
import { FC, useCallback } from "react";
import { getAssociatedTokenAddress, createTransferCheckedInstruction } from "@solana/spl-token";


export const RequestPay: FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const BONK_TOKEN_ADDRESS = "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263";
    const BONK_DECIMALS = 5;
    const RECEIVING_BONK_ATA = "5rmWy289CSN1XbHeRRQLwiv6ed3k64ipgKCzdpoFAX3E";

    const onClick = useCallback(async () => {
        if (!publicKey) {
            console.log("error", "Wallet not connected!");
            alert("Wallet not Connected!");
            return;
        }

        const transaction = new Transaction();
        try {

            const source_account = await getAssociatedTokenAddress(
                new PublicKey(BONK_TOKEN_ADDRESS),
                publicKey
            )
            
            const ix = createTransferCheckedInstruction(
                source_account,
                new PublicKey(BONK_TOKEN_ADDRESS),
                new PublicKey(RECEIVING_BONK_ATA),
                publicKey,
                10000,
                BONK_DECIMALS
            );
            transaction.add(ix);

            const tx = await sendTransaction(transaction, connection);
            await connection.confirmTransaction({
                blockhash: (
                    await connection.getLatestBlockhash("max")
                ).blockhash,
                lastValidBlockHeight: (
                    await connection.getLatestBlockhash("max")
                ).lastValidBlockHeight,
                signature: tx,
            });
            alert("Transaction Confirmed!");
        } catch (error: any) {
            alert(error);
            console.log(error);
        }
    }, [publicKey, connection]);

    return (
        <div>
            <button
                className="px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."
                onClick={onClick}
            >
                <span>PAY BONK!</span>
            </button>
        </div>
    );
};
