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
              <div className={styles.fortune_cover}>
                <div className={styles.fortune_result}>大吉</div>
              </div>
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
            <svg className={styles.fortune_ribbon} width="640" height="480" preserveAspectRatio="xMidYMin" viewBox="0 0 640 480">
                <path id="svg_6" d="m6.3333,410.42681c72.2575,-138.95673 174.1591,-177.86461 300.14653,-179.71736c125.98743,-1.85276 270.50243,72.2575 324.23236,-37.05513c18.52756,-94.49057 -157.48429,-135.25121 -296.44101,38.90788c-103.75435,53.72993 -309.41031,111.16538 -307.55755,-55.58269c16.67481,-196.39217 418.72293,133.39846 532.97628,233.69433" strokeWidth="10" stroke="#ff0000" fill="none" />
            </svg>
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
