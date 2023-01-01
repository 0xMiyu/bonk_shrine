import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { ContextProvider } from '../contexts/ContextProvider';
import { RequestPay } from '../components/RequestPay';
import { WalletBalance } from '../components/walletBalance';
require('@solana/wallet-adapter-react-ui/styles.css');


export default function Home() {
  return (
    <ContextProvider>
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
            Welcome to the Shrine of Bonk!
          </h1>

          <h2>Toss in 2 Million $BONK to get your fortune!</h2>
          <RequestPay />

        </main>

        <footer className={styles.footer}>
          <WalletBalance />
          <p>
            built and designed by
            <a
              href="https://twitter.com/0xMiyu"
              target="_blank"
              rel="noopener noreferrer"
            >
              @0xMiyu
            </a>
            and
            <a
              href="https://github.com/thedylone"
              target="_blank"
              rel="noopener noreferrer"
            >
              @thedylone
            </a>
          </p>
        </footer>
      </div>
    </ContextProvider>
  )
}
