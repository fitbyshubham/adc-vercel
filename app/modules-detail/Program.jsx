import right_arrow from '@/assets/icons/right_arrow.png'
import Image from 'next/image'
import Link from 'next/link'
import Text from '../components/Text'

const Program = ({ id, title, time, info }) => {
  if (info) {
    return (
      <div className="flex flex-col gap-4  pb-5">
        <div className="flex gap-5">
          <Text twClassName="w-[82px] text-[12px] max-md:text-[9px]">
            {time}
          </Text>
          <div className="w-[665px] max-md:w-[340px] max-sm:w-[220px] flex flex-col gap-3">
            <Text twClassName="leading-tight text-[24px] max-md:text-[16px]">
              {title}
            </Text>
            <Text
              capitalize={true}
              twClassName="text-[22px] max-md:text-[15px]"
            >
              {info}
            </Text>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-4  pb-5">
      <Text twClassName="w-[96px] text-[12px] max-md:text-[9px]">{time}</Text>
      <div className="flex justify-between">
        <div className="w-[624px] max-md:w-[320px] max-sm:w-[200px]">
          <Text
            twClassName={
              'leading-tight w-[249px] max-md:w-[165px] text-[24px] max-md:text-[16px]'
            }
          >
            {title}
          </Text>
        </div>
        <Link
          className="w-[30px] h-[30px] rounded-full bg-[#EAEAEA] p-2 flex justify-center items-center"
          href={`/modules-detail/${id}`}
        >
          <Image src={right_arrow} alt="Arrow" className="w-2 h-2" />
        </Link>
      </div>
    </div>
  )
}

export default Program
