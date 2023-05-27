import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">

      <Head>
        <title>ゆきのせかい。</title>
        <meta name="description" content="ゆきのせかい。 | 作品のひろば | デザイン・コーディング・Webアプリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </Head>

      <body className="bg-color01">
        <Main />
        <NextScript />
      </body>
      
    </Html>
  )
}
