import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { ContextProvider } from '../contexts/ContextProvider';
import { RequestPay } from '../components/RequestPay';
// import { FortuneElement } from '../components/fortune';
require('@solana/wallet-adapter-react-ui/styles.css');


export default function Home() {
  return (
    <ContextProvider>
      <div className={styles.container}>
        <Head>
          <title>Solana lfg</title>
          <meta name="description" content="kekw" />
          <link rel="icon" href="/torii.svg" />
        </Head>
        <main className={styles.main}>
          <div className={styles.wallet_button_container}>
            <WalletMultiButton className={styles.wallet_button + " btn btn-ghost mr-4"} />
          </div>

          <h1 id='werk' className={styles.title}>
            Welcome to the Shrine of Bonk!
          </h1>

          <RequestPay />

        </main>

        {/* <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            kmskmskmskmskms
          </a>
        </footer> */}
      </div>
    </ContextProvider>
  )
}
