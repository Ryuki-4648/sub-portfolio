import BackButton from "@/components/backbutton";
import Bottom from "@/components/bottom";
import Header from "@/components/header";

export default function Privacy() {
  return (
    <>
    
    <main className="h-screen">

      <Header />

      <h1 className="text-color02 text-type01 text-xl md:text-2xl mx-auto tracking-widest pt-32 md:pt-24 mb-12 md:mb-16">さいとのてびき</h1>
      <div className="w-11/12 sm:w-4/5 lg:w-7/12 mx-auto text-center px-4 pb-12 tracking-widest">
        <h2 className="text-type02 w-full text-lg md:text-lg mb-8">プライバシーポリシー</h2>
        
        <h3 className="text-type02 w-full text-md md:text-md mb-2">個人情報の管理方法</h3>
        <p className="text-left text-xs md:text-sm mb-10 leading-5 md:leading-7">当サイトは個人情報保護法などの法令・ガイドラインを遵守して、以下のポリシーに基づきユーザー様の個人情報の保護に万全を尽くします。</p>
        
        <h3 className="text-type02 w-full text-md md:text-md mb-2">個人情報の提供</h3>
        <p className="text-left text-xs md:text-sm mb-10 leading-5 md:leading-7">当サイト、お客様個人を識別しうる情報(以下、個人情報)を適切に管理します。また、外部への流出防止だけでなく、個人情報の紛失・破壊・改竄の危険や外部からの不正アクセスに対して、安全対策を実施しお客様の個人情報の保護に努めます。</p>
        
        <h3 className="text-type02 w-full text-md md:text-md mb-2">個人情報の利用目的について</h3>
        <p className="text-left text-xs md:text-sm mb-10 leading-5 md:leading-7">当サイトは、ユーザー様から収集した個人情報を次の目的で利用いたします。ユーザー様への連絡のため、ユーザー様からのお問い合せに対する回答のため、ユーザーへのサービス提供のため。</p>
        
        <h3 className="text-type02 w-full text-md md:text-md mb-2">個人情報保護に関するお問い合わせ先</h3>
        <p className="text-left text-xs md:text-sm leading-5 md:leading-7">個人情報保護に関するお問い合わせ先は<a href="https://docs.google.com/forms/d/e/1FAIpQLSe5RJxhW1gDHo5JDDYZaLQrQS8Ip2kTloIIk4l9EhR2yrfHUA/viewform?usp=sf_link" target="_blank" className="duration-500 text-color02 underline hover:opacity-50">こちらのお問い合わせフォーム</a>にお願い致します。</p>
      </div>

      <BackButton />
      <Bottom />

    </main>
    </>
  )
}