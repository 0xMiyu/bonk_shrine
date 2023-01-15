import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import { WalletBalance } from '../components/walletBalance';
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
          <h1 id='werk' className={styles.title}>
            Charm Shop (in development)
          </h1>
          
        </main>

      </div>
  )
}
