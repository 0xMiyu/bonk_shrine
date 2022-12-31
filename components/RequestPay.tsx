import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
    Transaction,
    LAMPORTS_PER_SOL,
    TransactionSignature,
    SystemProgram,
    PublicKey,
} from "@solana/web3.js";
import { FC, useCallback, useState, useRef, createElement } from "react";
import { getAssociatedTokenAddress, createTransferCheckedInstruction } from "@solana/spl-token";
import { useOutsideAlerter } from "./kewk";
import styles from '../styles/Home.module.css'
import { createRoot } from 'react-dom/client'
import { FortuneElement } from "./fortune";



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
            }, 2000)


            // setComponents([...components, "Sample Component"])

            console.log("fuck")


        } catch (error: any) {
            alert(error);
            console.log(error);
        }
    }, [publicKey, connection]);

    return (
        // <div ref={wrapperRef}>
        <div className={styles.shrine}>
            <div id='coin_div'></div>
            <div id='fortune_div'></div>
            <svg className={styles.shrine_tori} width="640" height="480" preserveAspectRatio="xMidYMin" viewBox="0 0 640 480">
                <path fill="#333333" stroke="#000000" strokeWidth="9" d="m0.66669,70.66666c101.33334,30.33334 288.66666,30 320.66666,30c32,0 220,1 318,-31" id="svg_4" />
                <path fill="#000000" stroke="#ff0000" strokeWidth="16" d="m0.66666,82.66666c101.33334,30.33334 288.66666,30 320.66666,30c32,0 220,1 318,-31" fillOpacity="0" id="svg_5" />
                <path fill="#000000" stroke="#bf0000" strokeWidth="4" d="m0.66666,92.66666c101.33334,30.33334 288.66666,30 320.66666,30c32,0 220,1 318,-31" fillOpacity="0" id="svg_6" />
                <rect fill="#ff0000" stroke="#000000" strokeWidth="3" x="10" y="180" width="620" height="20" id="svg_7" strokeOpacity="0" />
                <rect fill="#bf0000" stroke="#000000" strokeWidth="3" x="15" y="200" width="610" height="3" strokeOpacity="0" id="svg_8" />
                <rect fill="#ff0000" stroke="#000000" strokeWidth="3" strokeOpacity="0" x="100" y="110" width="40" height="350" id="svg_10" transform="rotate(3, 120, 285)" />
                <rect fill="#ff0000" stroke="#000000" strokeWidth="3" strokeOpacity="0" x="500" y="110" width="40" height="350" transform="rotate(-3, 520, 285)" id="svg_11" />
                <path fill="#ff0000" stroke="#000000" strokeWidth="2" d="m71,180l0,-13.99999l50.99999,13.99999l-50.99999,0z" id="svg_22" strokeOpacity="0" />
                <path fill="#ff0000" stroke="#000000" strokeWidth="2" d="m461.00001,179.99999l0,-13.99999l50.99999,13.99999l-50.99999,0z" strokeOpacity="0" id="svg_24" />
                <path fill="#ff0000" stroke="#000000" strokeWidth="2" d="m184.00001,180l0,-13.99999l-53.00001,13.99999l53.00001,0z" strokeOpacity="0" id="svg_25" />
                <rect fill="#ff7f00" stroke="#000000" strokeWidth="3" strokeOpacity="0" x="140" y="110" width="3" height="350" transform="rotate(3, 141.5, 285)" id="svg_12" />
                <rect fill="#ff7f00" stroke="#000000" strokeWidth="3" strokeOpacity="0" x="497" y="110" width="3" height="350" transform="rotate(-3, 498.5, 285)" id="svg_13" />
                <rect fill="#4c4c4c" stroke="#000000" strokeWidth="3" strokeOpacity="0" x="80" y="420" width="60" height="5" id="svg_14" />
                <rect fill="#191919" stroke="#000000" strokeWidth="3" strokeOpacity="0" x="75" y="425" width="70" height="55" id="svg_19" />
                <rect fill="#191919" stroke="#000000" strokeWidth="3" strokeOpacity="0" x="495" y="425" width="70" height="55" id="svg_18" />
                <rect fill="#4c4c4c" stroke="#000000" strokeWidth="3" strokeOpacity="0" x="500" y="420" width="60" height="5" id="svg_17" />
                <path fill="#ff0000" stroke="#000000" strokeWidth="2" d="m564.00004,180l0,-13.99999l-53.00001,13.99999l53.00001,0z" strokeOpacity="0" id="svg_26" />
                <rect fill="#bf0000" stroke="#000000" strokeWidth="3" strokeOpacity="0" x="292.50001" y="180" width="55" height="12" id="svg_27" />
                <rect fill="#191919" stroke="#000000" strokeWidth="3" strokeOpacity="0" x="295" y="120" width="50" height="70" id="svg_20" />
                <rect fill="#000000" stroke="#ffff56" strokeWidth="2" x="305" y="130" width="30" height="50" fillOpacity="0" id="svg_21" />
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
            {/* {components.map((item, i) => (<img key={i} className={styles.coin} src="BonkLogo.webp"></img>))} */}
            <div className={styles.pay__button__wrapper}>

                <button className={styles.pay__button} onClick={onClick}>
                    <span>PAY BONK!</span>
                </button>

            </div>

        </div>
    );
};
