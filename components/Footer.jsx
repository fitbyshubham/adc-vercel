"use client"
import { useEffect, useState, useContext } from "react"
import Image from "next/image"
import Button from "./Button"
import img1 from "@/assets/images/adc_logos_footer 2.png"
import img2 from "@/assets/images/adc_logos_footer 3.png"
import ADCLogo from "./ADCLogo"
import Api from "../api"
import Loading from "./Loading"
import config from "../apiConfig"
import { Context } from "../context"
import Filters from "./Filters"
import { getHomeFilters } from "../utils/filters"

const Footer = ({ lang }) => {
  const [data, setData] = useState(null)
  const { menuItems } = useContext(Context)

  useEffect(() => {
    Api.getFooterContent()
      .then((res) => {
        setData(res.data.attributes)
      })
      .catch(console.log)
  }, [])

  return (
    <div className="bg-black">
      <div className="pt-5">
        <Filters
          filters={getHomeFilters(menuItems, lang)}
          textColor="#ffffff"
        />
      </div>
      <div className="flex justify-between max-lg:items-center p-5 pt-[50px] lg:flex-row flex-col">
        <div className="flex max-lg:flex-col md:justify-between items-center lg:items-start gap-[50px] w-full">
          <div className="md:hidden">
            <ADCLogo isDarkMode={true} width={164} height={44} />
          </div>
          <div className="flex flex-col gap-y-4 mb-2 lg:w-[412px] w-full">
            <div className="max-md:hidden">
              <ADCLogo isDarkMode={true} width={164} height={44} />
            </div>
            <p className="text-xs text-white lg:text-start text-center md:pt-10">
              Get News & Insights directly to your inbox
            </p>
            <div className="px-4 py-2 rounded-full ring-1 ring-zinc-700 flex gap-x-2">
              <input
                type="text"
                name="email"
                id="email"
                className="bg-transparent outline-none focus:outline-none text-white placeholder:uppercase text-xs w-full"
                placeholder="E-mail Address"
              />
              <Button width={110} onButtonClick={() => {}}>
                <p className="text-xxs font-bold">Subscribe</p>
              </Button>
            </div>
          </div>
          {data ? (
            <div className="uppercase grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-[30px] lg:w-[270px] max-sm:w-[270px] gap-[30px]">
              <p className="text-[#5D5D5D] lg:text-end text-center">
                {data.address1}
              </p>
              <p className="text-[#5D5D5D] lg:text-end text-center">
                {data.address2}
              </p>
              <p className="text-[#5D5D5D] lg:text-end text-center">
                {data?.address3}
              </p>
              <div className="flex lg:justify-end justify-center">
                <p className="flex text-[#ffffff] gap-5">
                  <a href={data?.instagramLink}>instagram</a>
                  <a href={data?.facebookLink}>facebook</a>
                  <a href={data?.linkedinLink}>linkedin</a>
                </p>
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className="grid md:grid-flow-col sm:grid-cols-6 max-sm:grid-cols-3 p-5 gap-5">
        {data &&
          data.supports.map(({ id, visible, logo }) => (
            <Image
              key={id}
              src={config.IMAGE_API_URL + logo?.data.attributes.url || img1}
              alt="Supports"
              width={200}
              height={100}
              className="max-h-[100px] object-contain w-full"
            />
          ))}
      </div>
    </div>
  )
}

export default Footer
