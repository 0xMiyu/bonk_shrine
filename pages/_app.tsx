import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "../contexts/ContextProvider";
require("@solana/wallet-adapter-react-ui/styles.css");
import { ToastContainer } from "react-toastify";
import { WalletBalance } from "../components/walletBalance";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
export default function App({ Component, pageProps }: AppProps) {
    return (
        <ContextProvider>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Component {...pageProps} />
            <div className={styles.wallet_button_container}>
                <WalletMultiButton
                    className={styles.wallet_button + " btn btn-ghost mr-4"}
                />
            </div>
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
        </ContextProvider>
    );
}
