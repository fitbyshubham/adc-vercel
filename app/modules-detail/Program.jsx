import right_arrow from '@/assets/icons/right_arrow.png'
import Image from 'next/image'
import Link from 'next/link'
import Text from '../components/Text'

const Program = ({ id, title, time, info }) => {
  if (info) {
    return (
      <div className="flex flex-col gap-4  pb-5">
        <div className="flex gap-5">
          <Text fontSize={12} twClassName="w-[82px]">
            {time}
          </Text>
          <div className="w-[665px] flex flex-col gap-3">
            <Text fontSize={24} twClassName="leading-tight">
              {title}
            </Text>
            <Text capitalize={true} fontSize={22}>
              {info}
            </Text>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-4  pb-5">
      <Text fontSize={12} twClassName="w-[96px]">
        {time}
      </Text>
      <div className="flex justify-between">
        <div className="w-[624px] ">
          <Text fontSize={24} twClassName={'leading-tight w-[249px]'}>
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
