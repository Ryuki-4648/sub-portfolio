import Image from "next/image";

export default function Bottom() {
  return (
    <div className="absolute bottom-0 w-full">
      <Image src="/bg01.svg" width={2000} height={50} alt="" className="w-full"></Image>
    </div>
  )
}