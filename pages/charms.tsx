import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { ContextProvider } from '../contexts/ContextProvider';
import { RequestPay } from '../components/RequestPay';
// import { WalletBalance } from '../components/walletBalance';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
require('@solana/wallet-adapter-react-ui/styles.css');


export default function Charms() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Shrine of Bonk</title>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="icon" href="/torii.svg" />

        </Head>
        <main className={styles.main}>
          <div className={styles.wallet_button_container}>
            <WalletMultiButton className={styles.wallet_button + " btn btn-ghost mr-4"} />
          </div>
          <h1 id='werk' className={styles.title}>
            Charm Shop (in development)
          </h1>

        </main>

      </div>
  )
}
