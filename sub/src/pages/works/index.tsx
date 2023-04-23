import BackButton from "@/components/backbutton";
import Bottom from "@/components/bottom";
import Header from "@/components/header";

export default function Work() {
  return (
  <>
    <main>

      <Header />

      <h1 className="text-color02 text-type01 text-xl md:text-2xl mx-auto tracking-widest mb-12 mt-8 md:mb-8">さくひんのひろば</h1>

      <div className="flex justify-center flex-wrap mx-auto w-3/4 px-4">
        <p className="mb-12 text-black-700 text-xs text-type02 text-center tracking-widest w-full leading-7">すべて別ウィンドウで開きます。<br />コーディング勉強中のサイトもあるため、コードが正しくないものもあります。</p>
        <div className="flex justify-center">
          <ul className="text-color02 text-lg text-type02">
            <li className="mb-4">
              <a href="" target="_blank" className="duration-500 hover:text-color03">R.YUKI Portfolio</a>
            </li>
            <li className="mb-4">
              <a href="https://www.yuki-017.com/pokeccha/" target="_blank" className="duration-500 hover:text-color03">pokeccha</a>
            </li>
            <li className="mb-4">
              <a href="https://www.yuki-017.com/horoyoi-meter/" target="_blank" className="duration-500 hover:text-color03">ほろよいメーター</a>
            </li>
            <li className="mb-4">
              <a href="https://www.yuki-017.com/keyaki-nurse/index.html" target="_blank" className="duration-500 hover:text-color03">けやき坂中央病院 看護師採用サイト</a>
            </li>
            <li className="mb-4">
              <a href="" target="_blank" className="duration-500 hover:text-color03"></a>
            </li>
            <li className="mb-4">
              <a href="" target="_blank" className="duration-500 hover:text-color03"></a>
            </li>
          </ul>
        </div>
      </div>
      
      <BackButton />
      <Bottom />

    </main>
  </>
  )
}