import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ゆきのせかい</title>
        <meta name="description" content="ゆきのせかい。 | 作品のひろば | デザイン・コーディング・Webアプリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="h-screen overflow-hidden relative">
        <header className="flex justify-between px-5 pt-10">
          <a href="/">
            <Image
              alt="ゆきのせかい。"
              className=""
              height={50}
              priority
              src="/logo02.png"
              width={165}
            />
          </a>
          <ul className="flex flex-wrap">
            <li className="mr-8">
              <a href="" className="text-type01 text-lg text-white tracking-wider">ようこそ</a>
            </li>
            <li className="mr-8">
              <a href="/works/" className="text-type01 text-lg text-white tracking-wider">ひろば</a>
            </li>
            <li className="mr-8">
              <a href="/guide/" className="text-type01 text-lg text-white tracking-wider">あんない</a>
            </li>
          </ul>
        </header>

        <div className="absolute text-type01 mx-auto my-0 left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2">
          <h1 className="p-top__intro-title font-normal text-2xl ml-12 text-color02">ゆきのせかい</h1>
          <div className="p-top__intro-text text-lg tracking-widest text-white">
            <p>だれも　しらない</p>
            <p>ちいさな　ひろばで</p>
            <p>ゆきが　ふっている</p>
            <p>しんしんと　おとも　なく</p>
            <br /><br />
            <p>おや</p>
            <p>だれか　やってくる</p>
            <br />
            <p>しろくて　ちいさな　ゆきうさぎ</p>
            <p>ゆきに　くるまれ</p>
            <p>うさぎは　まわる</p>
            <br />
            <p>しずかな　ひろばに</p>
            <p>あさが　きた</p>
          </div>
        </div>

        <div className="bg-white h-24 w-full absolute bottom-0">
          <div className="c-bottom__snow-wave"></div>
        </div>
      </main>
    </>
  )
}
