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
        {data ? (
          <div className="uppercase flex flex-col gap-5 lg:items-end w-[250px]">
            <p className="text-[#5D5D5D] text-end max-md:text-center ">
              {data.address1}
            </p>
            <p className="text-[#5D5D5D] text-end max-md:text-center ">
              {data.address2}
            </p>
            <p className="text-[#5D5D5D] text-end max-md:text-center ">
              {data?.address3}
            </p>
            <p className="flex justify-between text-[#ffffff] gap-5">
              <a href={data?.instagramLink}>instagram</a>
              <a href={data?.facebookLink}>facebook</a>
              <a href={data?.linkedinLink}>linkedin</a>
            </p>
          </div>
        ) : (
          <Loading />
        )}
      </div>
      <div className="flex p-5  overflow-hidden gap-5">
        {data &&
          data.supports.map(({ id, visible, logo }) => (
            <Image
              key={id}
              src={config.IMAGE_API_URL + logo?.data.attributes.url || img1}
              alt="Supports"
              width={200}
              height={100}
              className="max-w-[100px] max-h-[100px] object-cover"
            />
          ))}
      </div>
    </div>
  )
}

export default Footer
