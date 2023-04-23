import BackButton from "@/components/backbutton";
import Bottom from "@/components/bottom";
import Header from "@/components/header";

export default function Guide() {
  return (
    <>
    
    <main className="h-full">

      <Header />

      <h1 className="text-color02 text-type01 text-xl md:text-2xl mx-auto tracking-widest pt-32 md:pt-24 mb-12 md:mb-16">さいとのあんない</h1>
      <div className="flex justify-center mx-auto text-center px-4">
        <p className="text-black-700 text-xs md:text-sm text-type02 text-left md:text-center md:tracking-widest w-full leading-6 md:leading-8">当サイトでは、個人で制作したサイトやWebアプリを掲載しております。<br /><br />
          作成したサイトはすべて架空のもので、実在のものとは関係ありません。<br />
          サイト内の写真はフリー素材または自身で撮影したものです。<br /><br />
          ご不明点等ございましたら、<a href="https://docs.google.com/forms/d/e/1FAIpQLSe5RJxhW1gDHo5JDDYZaLQrQS8Ip2kTloIIk4l9EhR2yrfHUA/viewform?usp=sf_link" target="_blank" className="duration-500 text-color02 underline hover:opacity-50">こちらのお問い合わせフォーム</a>からご連絡ください。
        </p>
      </div>
      <BackButton />
      <Bottom />

    </main>
    </>
  )
}