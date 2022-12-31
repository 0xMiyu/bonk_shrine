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
            }, 2500)


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
            {/* <svg className={styles.shrine_tori} width="640" height="480" preserveAspectRatio="xMidYMin" viewBox="0 0 640 480">
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
            </svg> */}
            <svg className={styles.shrine_tori} width="640" height="480" preserveAspectRatio="xMidYMin" viewBox="0 0 640 480"> <g>
                <title>Layer 1</title>
                <path id="svg_4" d="m0.66669,70.66666c101.33334,30.33334 288.66666,30 320.66666,30c32,0 220,1 318,-31" strokeWidth="9" stroke="#000000" fill="#333333" />
                <path id="svg_5" fillOpacity="0" d="m0.66666,82.66666c101.33334,30.33334 288.66666,30 320.66666,30c32,0 220,1 318,-31" strokeWidth="16" stroke="#ff0000" fill="#000000" />
                <path id="svg_6" fillOpacity="0" d="m0.66666,92.66666c101.33334,30.33334 288.66666,30 320.66666,30c32,0 220,1 318,-31" strokeWidth="4" stroke="#bf0000" fill="#000000" />
                <rect strokeOpacity="0" id="svg_7" height="20" width="620" y="180" x="10" strokeWidth="3" stroke="#000000" fill="#ff0000" />
                <rect id="svg_8" strokeOpacity="0" height="3" width="610" y="200" x="15" strokeWidth="3" stroke="#000000" fill="#bf0000" />
                <rect transform="rotate(3, 120, 285)" id="svg_10" height="350" width="40" y="110" x="100" strokeOpacity="0" strokeWidth="3" stroke="#000000" fill="#ff0000" />
                <rect id="svg_11" transform="rotate(-3, 520, 285)" height="350" width="40" y="110" x="500" strokeOpacity="0" strokeWidth="3" stroke="#000000" fill="#ff0000" />
                <path strokeOpacity="0" id="svg_22" d="m71,180l0,-13.99999l50.99999,13.99999l-50.99999,0z" strokeWidth="2" stroke="#000000" fill="#ff0000" />
                <path id="svg_24" strokeOpacity="0" d="m461.00001,179.99999l0,-13.99999l50.99999,13.99999l-50.99999,0z" strokeWidth="2" stroke="#000000" fill="#ff0000" />
                <path id="svg_25" strokeOpacity="0" d="m184.00001,180l0,-13.99999l-53.00001,13.99999l53.00001,0z" strokeWidth="2" stroke="#000000" fill="#ff0000" />
                <rect id="svg_12" transform="rotate(3, 141.5, 285)" height="350" width="3" y="110" x="140" strokeOpacity="0" strokeWidth="3" stroke="#000000" fill="#ff7f00" />
                <rect id="svg_13" transform="rotate(-3, 498.5, 285)" height="350" width="3" y="110" x="497" strokeOpacity="0" strokeWidth="3" stroke="#000000" fill="#ff7f00" />
                <rect id="svg_14" height="5" width="60" y="420" x="80" strokeOpacity="0" strokeWidth="3" stroke="#000000" fill="#4c4c4c" />
                <rect id="svg_19" height="55" width="70" y="425" x="75" strokeOpacity="0" strokeWidth="3" stroke="#000000" fill="#191919" />
                <rect id="svg_18" height="55" width="70" y="425" x="495" strokeOpacity="0" strokeWidth="3" stroke="#000000" fill="#191919" />
                <rect id="svg_17" height="5" width="60" y="420" x="500" strokeOpacity="0" strokeWidth="3" stroke="#000000" fill="#4c4c4c" />
                <path id="svg_26" strokeOpacity="0" d="m564.00004,180l0,-13.99999l-53.00001,13.99999l53.00001,0z" strokeWidth="2" stroke="#000000" fill="#ff0000" />
                <rect id="svg_27" height="12" width="55" y="180" x="292.50001" strokeOpacity="0" strokeWidth="3" stroke="#000000" fill="#bf0000" />
                <rect id="svg_20" height="70" width="50" y="120" x="295" strokeOpacity="0" strokeWidth="3" stroke="#000000" fill="#191919" />
                <rect id="svg_21" fillOpacity="0" height="50" width="30" y="130" x="305" strokeWidth="2" stroke="#ffff56" fill="#000000" />
            </g>
                <g>
                    <title>Layer 2</title>
                    <g id="svg_1">
                        <path fill="#3d1d00" stroke="#7f3f00" strokeWidth="5" d="m162.13167,316.73334l59.41459,-9.21667l197.17085,0l59.15123,8.95334l-315.47333,0.26333l-0.26333,0z" id="svg_2" />
                        <path fill="#000000" stroke="#7f3f00" strokeWidth="5" d="m189.51833,316.73334l49.10747,-9.21667l162.96606,0l48.8898,8.95334l-260.74568,0.26333l-0.21765,0z" fillOpacity="0" id="svg_3" />
                        <path fill="#000000" stroke="#7f3f00" strokeWidth="5" d="m213.48166,316.73334l40.08874,-9.21667l133.03688,0l39.91105,8.95334l-212.85899,0.26333l-0.17768,0z" fillOpacity="0" id="svg_4" />
                        <path fill="#000000" stroke="#7f3f00" strokeWidth="5" d="m239.025,316.73334l30.47537,-9.21667l101.13434,0l30.34029,8.95334l-161.81492,0.26333l-0.13507,0z" fillOpacity="0" id="svg_5" />
                        <path fill="#000000" stroke="#7f3f00" strokeWidth="5" d="m263.77833,316.73334l21.15932,-9.21667l70.21847,0l21.06553,8.95334l-112.34955,0.26333l-0.09378,0z" fillOpacity="0" id="svg_6" />
                        <path fill="#000000" stroke="#7f3f00" strokeWidth="5" d="m281.94833,316.73334l14.32095,-9.21667l47.52491,0l14.25747,8.95334l-76.03986,0.26333l-0.06347,0z" fillOpacity="0" id="svg_7" />
                        <path fill="#000000" stroke="#7f3f00" strokeWidth="5" d="m296.95833,316.73334l8.67185,-9.21667l28.77806,0l8.63341,8.95334l-46.04489,0.26333l-0.03843,0z" fillOpacity="0" id="svg_8" />
                        <path fill="#000000" stroke="#7f3f00" strokeWidth="5" d="m309.59832,316.73334l3.91472,-9.21667l12.99124,0l3.89737,8.95334l-20.78598,0.26333l-0.01735,0z" fillOpacity="0" id="svg_9" />
                        <path fill="#000000" stroke="#7f3f00" strokeWidth="5" d="m316.70832,316.73334l1.23884,-9.21667l4.11115,0l1.23334,8.95334l-6.57784,0.26333l-0.00549,0z" fillOpacity="0" id="svg_10" />
                        <rect fill="#7f3f00" stroke="#000000" strokeWidth="5" strokeOpacity="0" x="172.53333" y="327.26667" width="294.93332" height="134.29999" id="svg_11" />
                        <rect fill="#9b6217" stroke="#000000" strokeWidth="5" strokeOpacity="0" x="183.06667" y="327.26667" width="273.86665" height="113.23333" id="svg_12" />
                        <rect fill="#562900" stroke="#000000" strokeWidth="5" strokeOpacity="0" x="162" y="327.26667" width="315.99998" height="2.63333" id="svg_16" />
                        <rect fill="#7f3f00" stroke="#000000" strokeWidth="5" strokeOpacity="0" x="162" y="316.73334" width="315.99998" height="10.53333" id="svg_17" />
                        <circle fill="#7f3f00" stroke="#000000" strokeWidth="5" strokeOpacity="0" cx="319.99999" cy="377.3" r="26.33333" id="svg_18" />
                        <circle fill="#f9d922" stroke="#000000" strokeWidth="5" strokeOpacity="0" cx="319.99999" cy="374.66667" r="26.33333" id="svg_14" />
                        <circle fill="#ffae00" stroke="#000000" strokeWidth="5" strokeOpacity="0" cx="325.26666" cy="361.50001" r="10.53333" id="svg_19" />
                        <circle fill="#ffae00" stroke="#000000" strokeWidth="5" strokeOpacity="0" cx="327.89999" cy="385.2" r="10.53333" id="svg_20" />
                        <circle fill="#ffae00" stroke="#000000" strokeWidth="5" strokeOpacity="0" cx="306.83333" cy="374.66667" r="10.53333" id="svg_21" />
                        <rect fill="#000000" stroke="#ffc116" strokeWidth="5" x="193.6" y="337.80001" width="252.79999" height="94.8" fillOpacity="0" id="svg_22" />
                        <rect fill="#562900" stroke="#000000" strokeWidth="5" strokeOpacity="0" x="172.53333" y="461.56667" width="294.93332" height="2.63333" id="svg_26" />
                        <rect fill="#683607" stroke="#000000" strokeWidth="5" x="167.26667" y="461.56667" width="26.33333" height="18.43333" id="svg_23" strokeOpacity="0" />
                        <rect fill="#683607" stroke="#000000" strokeWidth="5" x="446.39999" y="461.56667" width="26.33333" height="18.43333" strokeOpacity="0" id="svg_24" />
                        <rect fill="#e5e5e5" stroke="#000000" strokeWidth="5" strokeOpacity="0" x="340.65031" y="49.34969" width="25" height="50" id="svg_28" transform="matrix(0.37241, 0.37241, -0.37241, 0.37241, 133.222, 207.562)" />
                        <rect fill="#e5e5e5" stroke="#000000" strokeWidth="5" strokeOpacity="0" x="340.65031" y="69.34969" width="25" height="50" transform="matrix(0.37241, 0.37241, -0.37241, 0.37241, 140.67, 210.647)" id="svg_32" />
                        <rect fill="#e5e5e5" stroke="#000000" strokeWidth="5" strokeOpacity="0" x="340.65031" y="89.34969" width="25" height="50" transform="matrix(0.37241, 0.37241, -0.37241, 0.37241, 148.118, 213.732)" id="svg_33" />
                        <rect fill="#e5e5e5" stroke="#000000" strokeWidth="5" strokeOpacity="0" x="340.65031" y="109.34969" width="25" height="50" transform="matrix(0.37241, 0.37241, -0.37241, 0.37241, 155.567, 216.817)" id="svg_34" />
                        <rect fill="#e5e5e5" stroke="#000000" strokeWidth="5" strokeOpacity="0" x="650.65031" y="49.34969" width="25" height="50" transform="matrix(0.37241, 0.37241, -0.37241, 0.37241, 181.042, 92.1146)" id="svg_35" />
                        <rect fill="#e5e5e5" stroke="#000000" strokeWidth="5" strokeOpacity="0" x="650.65031" y="69.34969" width="25" height="50" transform="matrix(0.37241, 0.37241, -0.37241, 0.37241, 188.49, 95.1998)" id="svg_36" />
                        <rect fill="#e5e5e5" stroke="#000000" strokeWidth="5" strokeOpacity="0" x="650.65031" y="89.34969" width="25" height="50" transform="matrix(0.37241, 0.37241, -0.37241, 0.37241, 195.938, 98.2849)" id="svg_37" />
                        <rect fill="#e5e5e5" stroke="#000000" strokeWidth="5" strokeOpacity="0" x="650.65031" y="109.34969" width="25" height="50" transform="matrix(0.37241, 0.37241, -0.37241, 0.37241, 203.386, 101.37)" id="svg_38" />
                    </g>
                </g>
            </svg>
            <div className={styles.shrine__overlay}>
                <img src="overlay.gif"></img>
            </div>
            {/* {components.map((item, i) => (<img key={i} className={styles.coin} src="BonkLogo.webp"></img>))} */}
            <div className={styles.pay__button__wrapper}>

                <button className={styles.pay__button} onClick={onClick}>
                    <span>PAY BONK! 🙏</span>
                </button>

            </div>

            <div id='coin_div'></div>
            <div id='fortune_div'></div>

        </div>
    );
};
