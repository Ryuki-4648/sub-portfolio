import BackButton from "@/components/backbutton";
import Bottom from "@/components/bottom";
import Header from "@/components/header";
import UnderPageTitle from "@/components/underPageTitle";
import worksListData from "@/data/worksList.json";

type WorksList = {
  url: string;
  title: string;
}

export default function Work() {
  return (
  <>
    <main className="h-full">

      <Header />

      <UnderPageTitle>さくひんのひろば</UnderPageTitle>

      <div className="flex justify-center flex-wrap mx-auto w-3/4 px-4 pb-24">
        <p className="mb-12 text-gray-900 text-xs text-type02 text-center tracking-widest w-full leading-7">
          すべて別ウィンドウで開きます。<br />作成時期：2018年〜
          </p>
        <div className="flex justify-center">
          <ul className="text-color02 text-lg text-type02">
            {worksListData.map((worksList: WorksList) => (
            <li key={worksList.url} className="mb-4">
              <a href={worksList.url} target="_blank" className="duration-500 hover:text-color03">{worksList.title}</a>
            </li>
            ))}
          </ul>
        </div>
      </div>
      
      <BackButton />
      <Bottom />

    </main>
  </>
  )
}