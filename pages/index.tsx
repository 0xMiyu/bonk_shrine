import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { ContextProvider } from "../contexts/ContextProvider";
import { RequestPay } from "../components/RequestPay";
// import { WalletBalance } from '../components/walletBalance';
// import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
require("@solana/wallet-adapter-react-ui/styles.css");

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Shrine of Bonk</title>
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <link rel="icon" href="/torii.svg" />
            </Head>
            <main className={styles.main}>
                <h1 id="werk" className={styles.title}>
                    Welcome to the Shrine of Bonk!
                </h1>

                <h2>Toss in 500,000 $BONK to get your fortune!</h2>
                <RequestPay />
            </main>
        </div>
    );
}
