import Bottom from '@/components/bottom'
import Header from '@/components/header'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>ゆきのせかい。</title>
      </Head>

      <div className="hidden sm:block snow-common snow01 text-white fixed -top-12 left-24 text-sm">●</div>
      <div className="snow-common snow02 text-white fixed -top-2 left-0 text-xs">●</div>
      
      <main className="h-screen overflow-hidden relative">
        <Header />

        <div className="flex md:block flex-wrap md:flex-nowrap absolute text-type01 px-4 md:px-0 mx-auto my-0 left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2">
          <h1 className="p-top__intro-title font-normal text-xl md:text-2xl mb-8 md:mb-0 md:ml-6 lg:ml-12 text-color02">ゆきのせかい</h1>
          <div className="p-top__intro-text text-xs sm:text-sm md:text-lg tracking-widest text-white">
            <p>だれも　しらない</p>
            <p>ちいさな　ひろばで</p>
            <p>ゆきが　ふっている</p>
            <p>しんしんと　おとも　なく</p>
            <br className="hidden sm:block" /><br />
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

        <Bottom />
      </main>
    </>
  )
}
