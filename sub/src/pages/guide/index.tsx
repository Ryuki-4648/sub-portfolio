import BackButton from "@/components/backbutton";
import Bottom from "@/components/bottom";
import Header from "@/components/header";

export default function Guide() {
  return (
    <>
    
    <main>

      <Header />

      <h1 className="text-color02 text-type01 text-xl md:text-2xl mx-auto tracking-widest mb-12 mt-8 md:mb-8">さいとのあんない</h1>
      <div className="flex justify-center mx-auto text-center px-4">
        <p className="text-black-700 text-xs md:text-sm text-type02 text-left md:text-center md:tracking-widest w-full leading-6 md:leading-8">当サイトでは、個人で制作したサイトやWebアプリなどを掲載しております。<br />
          ご不明点等ございましたら、<a href="https://docs.google.com/forms/d/e/1FAIpQLSe5RJxhW1gDHo5JDDYZaLQrQS8Ip2kTloIIk4l9EhR2yrfHUA/viewform?usp=sf_link" target="_blank">こちらのお問い合わせフォーム</a>からご連絡ください。
        </p>
      </div>
      <BackButton />
      <Bottom />

    </main>
    </>
  )
}