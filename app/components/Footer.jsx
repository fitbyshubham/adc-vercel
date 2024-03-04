'use client'
import Image from 'next/image'
import Button from './Button'
import img1 from '@/assets/images/adc_logos_footer 2.png'
import img2 from '@/assets/images/adc_logos_footer 3.png'

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
        <div>
          <Button onButtonClick={() => {}} width={250}>
            Subscribe to Newsletter
          </Button>
        </div>
        <div className="uppercase flex flex-col gap-5 lg:items-end w-[250px]">
          <div className="text-[#ffffff] text-[48px] max-md:text-center">
            ADC
          </div>
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
      <div className="flex p-5 mt-20">
        <Image
          src={img1}
          alt="Supports"
          className="w-[70rem] max-md:w-[5rem]"
        />
        <Image
          src={img2}
          alt="Supports"
          className="w-[20rem] max-md:w-[5rem]"
        />
      </div>
    </div>
  )
}

export default Footer
