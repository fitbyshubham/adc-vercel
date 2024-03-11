import React from "react"
import Text from "./Text"

const EmptyPage = ({ title }) => {
  return (
    <div className="h-screen bg-white px-[30px]">
      <Text fontSize={90}>{title}</Text>
    </div>
  )
}

export default EmptyPage
