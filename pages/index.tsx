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
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="description" content="Shrine of Bonk" />
          <link rel="icon" href="/torii.svg" />
          <meta property="og:title" content="Shrine of Bonk" />
          <meta property="og:description" content="Get your fortune read at Hatsumode" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Shrine of Bonk" />
          <meta name="twitter:description" content="Get your fortune read at Hatsumode" />
          <meta name="twitter:site" content="@0xMiyu" />
          <meta name="twitter:creator" content="@0xMiyu" />
          <meta name="twitter:image" content="https://bonk-shrine.vercel.app/card.png" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://bonk-shrine.vercel.app/" />
          <meta property="og:image" content="https://bonk-shrine.vercel.app/card.png" />
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
