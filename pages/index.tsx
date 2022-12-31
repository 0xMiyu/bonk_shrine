import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { ContextProvider } from '../contexts/ContextProvider';
import { RequestPay } from '../components/RequestPay';
import { TwitterShareButton, TwitterIcon } from 'react-share';
require('@solana/wallet-adapter-react-ui/styles.css');


export default function Home() {
  return (
    <ContextProvider>
      <div className={styles.container}>
        <Head>
          <title>Solana lfg</title>
          <meta name="description" content="kekw" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.wallet_button_container}>
            <WalletMultiButton className={styles.wallet_button + " btn btn-ghost mr-4"} />
          </div>

          <h1 className={styles.title}>
            Welcome to the Shrine of Bonk!
          </h1>
          <br />

          <RequestPay />

          <div className={styles.fortune_container}>
            <div className={styles.fortune}>
              <div className={styles.fortune_result}>大吉</div>

              <div className={styles.fortune_desc}>description goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <div className={styles.fortune_share}>
                Share your fortune
                <div className={styles.fortune_share_buttons}>
                  <TwitterShareButton
                    url={"insert url here"}
                    title={"I got " + "大吉" + " from the Shrine of Bonk!"}
                    className="Demo__some-network__share-button">
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>
                <button className={styles.fortune_share_retry} onClick={() => window.location.reload()}>Retry</button>
              </div>
            </div>
          </div>


        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            kmskmskmskmskms
          </a>
        </footer>
      </div>
    </ContextProvider>
  )
}
