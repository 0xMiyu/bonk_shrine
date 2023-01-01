import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <link rel="icon" href="/torii.svg" />

                <meta name="description" content="Get your fortune read at Hatsumode" />

                <meta key="og_url" property="og:url" content="https://www.bonkshrine.com/" />
                <meta key="og_type" property="og:type" content="website" />
                <meta key="og_title" property="og:title" content="Shrine of Bonk" />
                <meta key="og_desc" property="og:description" content="Get your fortune read for $BONK at 初詣" />
                <meta key="og_img" property="og:image" content="https://www.bonkshrine.com/card.png" />

                <meta key="twitter_card" name="twitter:card" content="summary_large_image" />
                <meta key="twitter_domain" property="twitter:domain" content="https://www.bonkshrine.com/" />
                <meta key="twitter_url" property="twitter:url" content="https://www.bonkshrine.com/" />
                <meta key="twitter_title" name="twitter:title" content="Shrine of Bonk" />
                <meta key="twitter_desc" name="twitter:description" content="Get your fortune read for $BONK at 初詣" />
                <meta key="twitter_img" name="twitter:image" content="https://www.bonkshrine.com/card.png" />


            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}