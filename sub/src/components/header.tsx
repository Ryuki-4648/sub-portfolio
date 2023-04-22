import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-wrap justify-between px-2 md:px-5 pt-6 md:pt-10">
      <a href="/" className="duration-500 mb-6 md:mb-0 hover:opacity-70">
        <Image
          alt="ゆきのせかい。"
          className=""
          height={50}
          priority
          src="/logo02.png"
          width={165}
        />
      </a>
      <ul className="flex flex-wrap md:justify-end w-full md:w-1/2">
        <li className="mr-4 md:mr-8">
          <a href="/" className="duration-500 text-type01 text-base md:text-lg text-white tracking-wider hover:text-color02">ようこそ</a>
        </li>
        <li className="mr-4 md:mr-8">
          <a href="/works/" className="duration-500 text-type01 text-base md:text-lg text-white tracking-wider hover:text-color02">ひろば</a>
        </li>
        <li className="">
          <a href="/guide/" className="duration-500 text-type01 text-base md:text-lg text-white tracking-wider hover:text-color02">あんない</a>
        </li>
      </ul>
    </header>
  )
}