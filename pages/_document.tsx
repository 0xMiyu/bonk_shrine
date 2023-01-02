import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    const description = 'Get your fortune read for $BONK at 初詣'
    const title = 'Shrine of Bonk'
    const url = 'https://www.bonkshrine.com/'
    const image = 'https://www.bonkshrine.com/card.png'
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel="icon" href="/torii.svg" />

                <meta name="description" content={description} />

                <meta key="og_url" property="og:url" content={url} />
                <meta key="og_type" property="og:type" content="website" />
                <meta key="og_title" property="og:title" content={title} />
                <meta key="og_desc" property="og:description" content={description} />
                <meta key="og_img" property="og:image" content={image} />

                <meta key="twitter_card" name="twitter:card" content="summary_large_image" />
                <meta key="twitter_domain" property="twitter:domain" content={url} />
                <meta key="twitter_url" property="twitter:url" content={url} />
                <meta key="twitter_title" name="twitter:title" content={title} />
                <meta key="twitter_desc" name="twitter:description" content={description} />
                <meta key="twitter_img" name="twitter:image" content={image} />


            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}