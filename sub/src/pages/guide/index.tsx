import Bottom from "@/components/bottom";
import Header from "@/components/header";

export default function Guide() {
  return (
    <>
    
    <main>
      <Header />
      <h1 className="text-color02 text-type01 text-xl md:text-2xl mx-auto tracking-widest mb-8">さいとのあんない</h1>
      <div className="mx-auto text-center">
        <p className="text-md leading-loose tracking-wide">当サイトでは、個人で制作したサイトやWebアプリなどを掲載しております。<br />
          ご不明点等ございましたら、<a href="" target="_blank">こちらのお問い合わせフォーム</a>からご連絡ください。
        </p>
      </div>
      <Bottom />
    </main>
    </>
  )
}