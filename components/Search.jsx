"use client"
import Image from "next/image"
import search_icon from "@/assets/icons/search.png"
import close_icon from "@/assets/icons/close.png"
import { useState } from "react"
import Button from "./Button"
import Text from "./Text"

const Search = ({ text, setText, handleSearch }) => {
  const [isActive, setIsActive] = useState(false)

  const handleCurrentSearch = (e) => {
    const currentValue = e.target.value.toUpperCase()
    setText(currentValue)
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSearch(text)
    }
  }

  const handleActiveStatus = () => {
    if (isActive) {
      setText("")
      handleSearch("")
    }

    setIsActive(!isActive)
  }

  return (
    <div className="flex flex-col items-center max-sm:justify-center gap-10">
      <button
        className="bg-[#EAEAEA] w-[50px] h-[50px] rounded-full p-4 flex justify-center items-center cursor-pointer"
        onClick={handleActiveStatus}
      >
        {isActive ? (
          <Image src={close_icon} alt="Search" />
        ) : (
          <Image src={search_icon} alt="Search" />
        )}
      </button>
      <div
        className={`flex items-center gap-2 border-b-2 border-black p-1  ${
          isActive ? "" : "hidden"
        }`}
      >
        <input
          placeholder="Search..."
          value={text}
          className={`outline-none w-[478px] max-sm:w-[280px] text-xxs`}
          onKeyPress={handleKeyPress}
          onChange={handleCurrentSearch}
        />
        <Button
          width={74}
          style={{ padding: "5px" }}
          onButtonClick={() => handleSearch(text)}
        >
          <Text fontSize={12}>Suchen</Text>
        </Button>
      </div>
    </div>
  )
}

export default Search
