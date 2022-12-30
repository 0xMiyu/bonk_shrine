import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { ContextProvider } from '../contexts/ContextProvider';
import { RequestPay } from '../components/RequestPay';
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
          <h1 className={styles.title}>
            Welcome to the Shrine of Bonk!
          </h1>
          <br />

          <div className={styles.shrine}>
            <svg width="640" height="480" preserveAspectRatio="xMidYMin" viewBox="0 0 640 480">
              <rect id="svg_29" height="12" width="486" y="66.86667" x="84.53333" stroke-linecap="null"
                stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#3f3f3f" />
              <rect id="svg_30" height="12" width="470" y="82.86667" x="90.53333" stroke-linecap="null"
                stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ff0000" />
              <rect id="svg_31" height="18" width="471" y="127.86667" x="89.53333" stroke-linecap="null"
                stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ff0000" />
              <rect id="svg_32" height="297" width="25" y="94.86667" x="153.53333" stroke-linecap="null"
                stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ff0000" />
              <rect id="svg_33" height="303" width="28" y="94.86667" x="476.53333" stroke-linecap="null"
                stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ff0000" />
              <rect id="svg_34" height="31" width="21" y="95.86667" x="323.53333" stroke-linecap="null"
                stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ff0000" />
              <rect id="svg_35" height="33" width="38" y="389.86667" x="146.53333" stroke-linecap="null"
                stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#000000" />
              <rect id="svg_37" height="33" width="38" y="395.2" x="471.2" stroke-linecap="null"
                stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#000000" />
            </svg>
            <div className={styles.shrine__overlay}>
              <img src="overlay.gif"></img>
            </div>
            <img className={styles.coin} src="BonkLogo.webp"></img>
          </div>

          <div className={styles.fortune_container}>
            <div className={styles.fortune}>
              <div>col 1</div>
              <div>col 2</div>
              <div>col 3</div>
            </div>
          </div>


          <br />
          <WalletMultiButton className="btn btn-ghost mr-4" />
          <br />
          <br />

          <RequestPay />


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
