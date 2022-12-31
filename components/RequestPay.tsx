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
            <svg className={styles.shrine_tori} width="640" height="480" preserveAspectRatio="xMidYMin" viewBox="0 0 640 480">
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
            <svg className={styles.shrine_box} width="320" height="240" preserveAspectRatio="xMidYMin" viewBox="0 0 640 480">
                <defs>
                    <linearGradient y2="0.81094" x2="1" y1="0" x1="0" spreadMethod="pad" id="svg_22">
                        <stop offset="0" stopColor="#ffffff" />
                        <stop offset="0.96901" stopOpacity="0.98047" stopColor="#d1d1d1" />
                    </linearGradient>
                </defs>
                <rect id="svg_1" height="200" width="400" y="140" x="120" strokeWidth="0" stroke="#ff0000" fill="#7f3f00" />
                <circle id="svg_2" r="40" cy="220" cx="320" strokeWidth="0" stroke="#ff0000" fill="#ffff00" />
                <rect id="svg_3" height="25" width="425" y="115" x="107.5" strokeWidth="0" stroke="#ff0000" fill="#7f7f00" />
                <rect id="svg_4" height="0" width="1" y="31.86667" x="671.33331" strokeWidth="0" stroke="#ff0000" fill="#7f7f00" />
                <rect id="svg_8" height="230" width="20" y="140" x="115" strokeWidth="0" stroke="#ff0000" fill="#7f7f00" />
                <rect id="svg_9" height="230" width="20" y="140" x="505" strokeWidth="0" stroke="#ff0000" fill="#7f7f00" />
                <path id="svg_14" d="m114.33331,186.86667c27,6 30,11 61,12c34,-2 27,4 55,-1c18,-5 31,-8 48,-14c13,-5 26,-9 45,-8c21,3 34,11 50,18c18,7 36,11 57,9c23,-1 35,1 54,-2c27,-5 27,-2 40.66669,-13.86667" strokeWidth="7" stroke="#ff7f00" fill="none" />
                <rect transform="rotate(45, 199.085, 219.795) translate(15, 2)" id="svg_16" height="34" width="17" y="200.79465" x="175.58481" strokeWidth="0" stroke="#ffffff" fill="url(#svg_22)" />
                <rect id="svg_24" transform="rotate(45, 199.333, 243.867) translate(16, 1) translate(-1, 3) translate(6, -8) translate(-5.7518, 30.0721)" height="34" width="17" y="200.79465" x="175.58481" strokeWidth="0" stroke="#ffffff" fill="url(#svg_22)" />
                <rect id="svg_25" transform="rotate(45, 199.085, 267.795) translate(16, 1) translate(-3, 6) translate(2, 43)" height="34" width="17" y="200.79465" x="175.58481" strokeWidth="0" stroke="#ffffff" fill="url(#svg_22)" />
                <rect id="svg_26" transform="rotate(45, 199.085, 291.795) translate(16, 1) translate(-5, 8) translate(1, 5) translate(3, 60)" height="34" width="17" y="200.79465" x="175.58481" strokeWidth="0" stroke="#ffffff" fill="url(#svg_22)" />
                <rect id="svg_27" transform="rotate(45, 430.333, 219.867) translate(246.248, 2.07205)" height="34" width="17" y="200.79465" x="175.58481" strokeWidth="0" stroke="#ffffff" fill="url(#svg_22)" />
                <rect id="svg_28" transform="rotate(45, 430.085, 243.795) translate(246, 26)" height="34" width="17" y="200.79465" x="175.58481" strokeWidth="0" stroke="#ffffff" fill="url(#svg_22)" />
                <rect id="svg_29" transform="rotate(45, 429.085, 268.795) translate(245, 51)" height="34" width="17" y="200.79465" x="175.58481" strokeWidth="0" stroke="#ffffff" fill="url(#svg_22)" />
                <rect id="svg_30" transform="rotate(45, 431.085, 289.795) translate(247, 72)" height="34" width="17" y="200.79465" x="175.58481" strokeWidth="0" stroke="#ffffff" fill="url(#svg_22)" />
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
