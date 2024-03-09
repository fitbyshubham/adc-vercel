import Image from "next/image"
import i1 from "@/assets/images/i1.png"
import i2 from "@/assets/images/i2.png"
import i3 from "@/assets/images/i3.png"

const Impressionen = () => {
  return (
    <div className="relative">
      <div className="text-center text-white text-[24px] absolute inset-0 flex items-center justify-center z-10">
        <p>IMPRESSIONEN 2023</p>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1">
        <div className="relative aspect-square">
          <Image src={i3} alt="Im3" fill />
        </div>
        <div className="relative aspect-square">
          <Image src={i2} alt="Im2" fill />
        </div>
        <div className="relative aspect-square">
          <Image src={i1} alt="Im1" fill />
        </div>
      </div>
    </div>
  )
}

export default Impressionen
