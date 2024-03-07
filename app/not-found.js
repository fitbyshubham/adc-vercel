import not_found from "@/assets/images/not_found.svg"
import Image from "next/image"

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Image src={not_found} alt="404" />
    </div>
  )
}

export default NotFound
