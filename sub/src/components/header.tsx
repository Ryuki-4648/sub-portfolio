export default function Header() {
  return (
    <header className="flex flex-wrap justify-between px-2 md:px-12 pt-6 md:pt-10">
      <a href="/" className="duration-500 mb-4 md:mb-0 hover:opacity-70">
        <img src="/logo02.png" alt="ゆきのせかい。" className="w-40 md:w-52" />
      </a>
      <ul className="flex flex-wrap justify-end w-full md:w-1/2">
        <li className="mr-4 md:mr-8">
          <a href="/" className="duration-500 text-type01 text-base md:text-xl text-white tracking-wider hover:text-color02">ようこそ</a>
        </li>
        <li className="mr-4 md:mr-8">
          <a href="/works.html" className="duration-500 text-type01 text-base md:text-xl text-white tracking-wider hover:text-color02">ひろば</a>
        </li>
        <li className="">
          <a href="/guide.html" className="duration-500 text-type01 text-base md:text-xl text-white tracking-wider hover:text-color02">あんない</a>
        </li>
      </ul>
    </header>
  )
}