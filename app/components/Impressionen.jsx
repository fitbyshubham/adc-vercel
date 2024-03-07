import Image from "next/image"
import i1 from "@/assets/images/i1.png"
import i2 from "@/assets/images/i2.png"
import i3 from "@/assets/images/i3.png"

const Impressionen = () => {
  return (
    <div>
      <div className="text-center text-white text-[24px] relative top-[18rem]">
        IMPRESSIONEN 2023
      </div>
      <div className="flex max-md:flex-col max-sm:flex-col">
        <Image src={i3} alt="Im3" />
        <Image src={i2} alt="Im2" />
        <Image src={i1} alt="Im1" />
      </div>
    </div>
  )
}

export default Impressionen
