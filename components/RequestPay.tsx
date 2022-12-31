import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
    Transaction,
    LAMPORTS_PER_SOL,
    TransactionSignature,
    SystemProgram,
    PublicKey,
} from "@solana/web3.js";
import { FC, useCallback, useState, useRef } from "react";
import { getAssociatedTokenAddress, createTransferCheckedInstruction } from "@solana/spl-token";
import { RANDOMDIV } from "./testing";
import { useOutsideAlerter } from "./kewk";
import styles from '../styles/Home.module.css'



export const RequestPay: FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const BONK_TOKEN_ADDRESS = "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263";
    const BONK_COST = 1;
    const BONK_DECIMALS = 5;
    const RECEIVING_BONK_ATA = "5rmWy289CSN1XbHeRRQLwiv6ed3k64ipgKCzdpoFAX3E";
    const [components, setComponents] = useState([""]);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const onClick = useCallback(async () => {
        if (!publicKey) {
            console.log("error", "Wallet not connected!");
            alert("Wallet not Connected!");
            return;
        }

        const transaction = new Transaction();
        try {

            // const source_account = await getAssociatedTokenAddress(
            //     new PublicKey(BONK_TOKEN_ADDRESS),
            //     publicKey
            // )

            // const ix = createTransferCheckedInstruction(
            //     source_account,
            //     new PublicKey(BONK_TOKEN_ADDRESS),
            //     new PublicKey(RECEIVING_BONK_ATA),
            //     publicKey,
            //     BONK_COST * Math.pow(10, BONK_DECIMALS),
            //     BONK_DECIMALS
            // );
            // transaction.add(ix);

            // const tx = await sendTransaction(transaction, connection);
            // await connection.confirmTransaction({
            //     blockhash: (
            //         await connection.getLatestBlockhash("max")
            //     ).blockhash,
            //     lastValidBlockHeight: (
            //         await connection.getLatestBlockhash("max")
            //     ).lastValidBlockHeight,
            //     signature: tx,
            // });
            alert("Transaction Confirmed!");


            setComponents([...components, "Sample Component"])

            console.log("fuck")


        } catch (error: any) {
            alert(error);
            console.log(error);
        }
    }, [publicKey, connection]);

    return (
        // <div ref={wrapperRef}>
        <div className={styles.shrine}>
                <svg width="640" height="480" preserveAspectRatio="xMidYMin" viewBox="0 0 640 480">
                    <rect id="svg_29" height="12" width="486" y="66.86667" x="84.53333" 
                          strokeWidth="5" stroke="#000000" fill="#3f3f3f" />
                    <rect id="svg_30" height="12" width="470" y="82.86667" x="90.53333" 
                          strokeWidth="5" stroke="#000000" fill="#ff0000" />
                    <rect id="svg_31" height="18" width="471" y="127.86667" x="89.53333" 
                          strokeWidth="5" stroke="#000000" fill="#ff0000" />
                    <rect id="svg_32" height="297" width="25" y="94.86667" x="153.53333" 
                          strokeWidth="5" stroke="#000000" fill="#ff0000" />
                    <rect id="svg_33" height="303" width="28" y="94.86667" x="476.53333" 
                          strokeWidth="5" stroke="#000000" fill="#ff0000" />
                    <rect id="svg_34" height="31" width="21" y="95.86667" x="323.53333" 
                          strokeWidth="5" stroke="#000000" fill="#ff0000" />
                    <rect id="svg_35" height="33" width="38" y="389.86667" x="146.53333" 
                          strokeWidth="5" stroke="#000000" fill="#000000" />
                    <rect id="svg_37" height="33" width="38" y="395.2" x="471.2" 
                          strokeWidth="5" stroke="#000000" fill="#000000" />
                </svg>
                <div className={styles.shrine__overlay}>
                    <img src="overlay.gif"></img>
                </div>
                {components.map((item, i) => (<img key={i} className={styles.coin} src="BonkLogo.webp"></img>))}
                <div className={styles.pay__button__wrapper}>

                    <button className={styles.pay__button} onClick={onClick}>
                        <span>PAY BONK!</span>
                    </button>

                </div>

            </div>
            );
};
