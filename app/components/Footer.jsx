"use client"
import Image from "next/image"
import Button from "./Button"
import img1 from "@/assets/images/adc_logos_footer 2.png"
import img2 from "@/assets/images/adc_logos_footer 3.png"
import ADCLogo from "./ADCLogo"

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="flex justify-between p-5 text-white max-md:hidden">
        <div>HOME</div>
        <div>INSIGHTS</div>
        <div>LEARNING</div>
        <div>CREATIVE DAYS</div>
        <div>ADC AWARDS</div>
        <div>PEOPLE</div>
      </div>
      <div className="flex justify-between max-md:items-center p-5 pt-20 max-md:flex-col">
        <div className="flex flex-col gap-10">
          <ADCLogo isDarkMode={true} width={164} height={44} />
          <div className="flex flex-col gap-y-4 mb-2">
            <p className="text-sm text-white">
              Get News & Insights directly to your inbox
            </p>
            <div className="px-4 py-2 rounded-full ring-1 ring-zinc-700 flex gap-x-2">
              <input
                type="text"
                name="email"
                id="email"
                className="bg-transparent outline-none focus:outline-none text-white placeholder:uppercase text-xs sm:w-[250px] w-full"
                placeholder="E-mail Address"
              />
              <Button width={100} onButtonClick={() => {}}>
                <p className="text-xs font-bold">Subscribe</p>
              </Button>
            </div>
          </div>
        </div>
        <div className="uppercase flex flex-col gap-5 lg:items-end w-[250px]">
          <p className="text-[#5D5D5D] text-end max-md:text-center ">
            ADC Switzerland Zentralstrasse 18, 8003 Zürich +41 44 262 00 33
          </p>
          <p className="text-[#5D5D5D] text-end max-md:text-center ">
            Geschäftsstelle & Galerie Mo, Di & Do jeweils 9 – 17 Uhr und auf
            Voranmeldung
          </p>
          <p className="text-[#5D5D5D] text-end max-md:text-center ">
            Impressum DATENSCHUTZ
          </p>
          <p className="flex justify-between text-[#ffffff] gap-5">
            <a href="#">instagram</a>
            <a href="#">facebook</a>
            <a href="#">linkedin</a>
          </p>
        </div>
      </div>
      <div className="flex p-5 mt-20 overflow-hidden">
        <Image src={img1} alt="Supports" className="w-full" />
        <Image src={img2} alt="Supports" className="w-full" />
      </div>
    </div>
  )
}

export default Footer
