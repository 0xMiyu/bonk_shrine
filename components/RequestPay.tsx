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
                <path id="svg_2" d="m20.25,170l112.81251,-17.5l374.37505,0l112.31247,17.00001l-599.00003,0.49999z" strokeWidth="5" stroke="#7f3f00" fill="#3d1d00" />
                <path id="svg_3" fillOpacity="0" d="m72.25,170l93.24203,-17.5l309.42925,0l92.82874,17.00001l-495.08676,0.49999z" strokeWidth="5" stroke="#7f3f00" fill="#000000" />
                <path id="svg_4" fillOpacity="0" d="m117.75,170l76.11786,-17.5l252.60168,0l75.78047,17.00001l-404.16265,0.49999z" strokeWidth="5" stroke="#7f3f00" fill="#000000" />
                <path id="svg_5" fillOpacity="0" d="m166.25,170l57.86463,-17.5l192.02723,0l57.60815,17.00001l-307.24354,0.49999z" strokeWidth="5" stroke="#7f3f00" fill="#000000" />
                <path id="svg_6" fillOpacity="0" d="m213.25,170l40.17593,-17.5l133.32622,0l39.99785,17.00001l-213.32194,0.49999z" strokeWidth="5" stroke="#7f3f00" fill="#000000" />
                <path id="svg_7" fillOpacity="0" d="m247.75,170l27.19167,-17.5l90.23718,0l27.07114,17.00001l-144.37948,0.49999z" strokeWidth="5" stroke="#7f3f00" fill="#000000" />
                <path id="svg_8" fillOpacity="0" d="m276.25,170l16.46554,-17.5l54.64189,0l16.39256,17.00001l-87.42702,0.49999z" strokeWidth="5" stroke="#7f3f00" fill="#000000" />
                <path id="svg_9" fillOpacity="0" d="m300.24999,170l7.43302,-17.5l24.66691,0l7.40007,17.00001l-39.46706,0.49999z" strokeWidth="5" stroke="#7f3f00" fill="#000000" />
                <path id="svg_10" fillOpacity="0" d="m313.74999,170l2.35222,-17.5l7.80598,0l2.34179,17.00001l-12.48957,0.49999z" strokeWidth="5" stroke="#7f3f00" fill="#000000" />
                <rect id="svg_11" height="255" width="560" y="190" x="40" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#7f3f00" />
                <rect id="svg_12" height="215" width="520" y="190" x="60" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#9b6217" />
                <rect id="svg_16" height="5" width="600" y="190" x="20" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#562900" />
                <rect id="svg_17" height="20" width="600" y="170" x="20" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#7f3f00" />
                <circle id="svg_18" r="50" cy="285" cx="320" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#7f3f00" />
                <circle id="svg_14" r="50" cy="280" cx="320" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#f9d922" />
                <circle id="svg_19" r="20" cy="255" cx="330" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#ffae00" />
                <circle id="svg_20" r="20" cy="300" cx="335" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#ffae00" />
                <circle id="svg_21" r="20" cy="280" cx="295" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#ffae00" />
                <rect id="svg_22" fillOpacity="0" height="180" width="480" y="210" x="80" strokeWidth="5" stroke="#ffc116" fill="#000000" />
                <rect id="svg_26" height="5" width="560" y="445" x="40" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#562900" />
                <rect strokeOpacity="0" id="svg_23" height="35" width="50" y="445" x="30" strokeWidth="5" stroke="#000000" fill="#683607" />
                <rect id="svg_24" strokeOpacity="0" height="35" width="50" y="445" x="560" strokeWidth="5" stroke="#000000" fill="#683607" />
                <rect transform="rotate(45, 162.5, 265)" id="svg_28" height="50" width="25" y="240" x="150" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#e5e5e5" />
                <rect id="svg_32" transform="rotate(45, 162.5, 285)" height="50" width="25" y="260" x="150" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#e5e5e5" />
                <rect id="svg_33" transform="rotate(45, 162.5, 305)" height="50" width="25" y="280" x="150" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#e5e5e5" />
                <rect id="svg_34" transform="rotate(45, 162.5, 325)" height="50" width="25" y="300" x="150" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#e5e5e5" />
                <rect id="svg_35" transform="rotate(45, 472.5, 265)" height="50" width="25" y="240" x="460" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#e5e5e5" />
                <rect id="svg_36" transform="rotate(45, 472.5, 285)" height="50" width="25" y="260" x="460" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#e5e5e5" />
                <rect id="svg_37" transform="rotate(45, 472.5, 305)" height="50" width="25" y="280" x="460" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#e5e5e5" />
                <rect id="svg_38" transform="rotate(45, 472.5, 325)" height="50" width="25" y="300" x="460" strokeOpacity="0" strokeWidth="5" stroke="#000000" fill="#e5e5e5" />
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
