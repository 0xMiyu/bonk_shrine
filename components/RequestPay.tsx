import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction, PublicKey } from "@solana/web3.js";
import { FC, useCallback, useState, useRef, createElement } from "react";
import { getAssociatedTokenAddress, createTransferCheckedInstruction } from "@solana/spl-token";
import styles from '../styles/Home.module.css'
import { createRoot } from 'react-dom/client'
import { FortuneElement } from "./fortune";
import { Torii } from "./torii";
import { toast } from "react-toastify";


export const RequestPay: FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const BONK_TOKEN_ADDRESS = "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263";
    const BONK_COST = 500000;
    const BONK_DECIMALS = 5;
    const RECEIVING_BONK_ATA = "B7Zw8g26Pdtm9zBFkkyqurhE9mwVLKgg45U2RfnEjmoA";

    const onClick = useCallback(async () => {
        if (!publicKey) {
            console.log("error", "Wallet not connected!");
            // alert("Wallet not Connected!");
            toast.error('Wallet not Connected!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
                });
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
                BONK_COST * Math.pow(10, BONK_DECIMALS),
                BONK_DECIMALS
            );
            transaction.add(ix);

            const tx = await sendTransaction(transaction, connection);
            const id = toast.loading("Please wait...", {
                position: "top-center",
                theme: "dark",
            })
            
            await connection.confirmTransaction({
                blockhash: (
                    await connection.getLatestBlockhash("max")
                ).blockhash,
                lastValidBlockHeight: (
                    await connection.getLatestBlockhash("max")
                ).lastValidBlockHeight,
                signature: tx,
            });
            toast.update(id, { render: "Transaction Confirmed! 🚀", type: "success", isLoading: false });
                
            // alert("Transaction Confirmed!");
            // toast.success('Transaction Confirmed! 🚀', {
            //     position: "top-center",
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: false,
            //     draggable: false,
            //     progress: undefined,
            //     theme: "dark",
            //     });
            let root_element = document.getElementById('coin_div');
            let root = createRoot(root_element!)
            const coin_element = createElement('img', { className: styles.coin, src: "BonkLogo.webp" });
            root.render(coin_element)
            setTimeout(() => {
                root.unmount();
                root_element = document.getElementById('fortune_div');
                root = createRoot(root_element!)
                const Fortune = createElement(FortuneElement)
                root.render(Fortune);
            }, 2500)

            // console.log("fuck")

        } catch (error: any) {
            toast.error(error, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });
            console.log(error);
        }
    }, [publicKey, connection]);

    return (
        <div className={styles.shrine}>
            <Torii />
            <div className={styles.shrine__overlay}>
                <img src="overlay.gif"></img>
            </div>
            <div className={styles.pay__button__wrapper}>

                <button className={styles.pay__button} onClick={onClick}>
                    <span>TOSS BONK! 🙏</span>
                </button>

            </div>

            <div id='coin_div'></div>
            <div id='fortune_div'></div>

        </div>
    );
};
