"use client"
import people from "@/assets/images/speaker.png"
import Image from "next/image"
import Link from "next/link"
import Text from "@/components/Text"
import Button from "@/components/Button"

const ViewDetails = () => {
  return (
    <div className="flex flex-col items-center pt-5">
      <Image src={people} alt="People" width={200} height={200} />
      <div className="pt-8 text-[22px]">
        <div>VZ Vermögenszentrum</div>
        <div>dummy.ackermann@dummy.com</div>
        <div>+41 76 252 52 00</div>
      </div>
      <div className="flex items-center gap-5 pt-8 pb-10">
        <Link href="/">
          <Text fontSize={12}>LinkedIn</Text>
        </Link>
        <Button style={{ padding: 3, width: 75 }}>
          <Text fontSize={12}>MEMBER</Text>
        </Button>
      </div>
    </div>
  )
}

export default ViewDetails
