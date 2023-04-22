import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ゆきのせかい</title>
        <meta name="description" content="ゆきのせかい。 | 作品のひろば | デザイン・コーディング・Webアプリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <Image
            src="/vercel.svg"
            alt="ゆきのせかい。"
            width={100}
            height={24}
            priority
          />
        </header>
        <div>

        </div>
      </main>
    </>
  )
}
