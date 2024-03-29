import React from "react"
import Text from "./Text"

const EmptyPage = ({ title }) => {
  return (
    <div className="h-screen bg-white px-[30px]">
      <Text twClassName={"md:text-[90px] text-lg"}>{title}</Text>
    </div>
  )
}

export default EmptyPage
