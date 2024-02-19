import Image from 'next/image'
import search_icon from '@/assets/icons/search.png'

const Search = () => {
  return (
    <div className="bg-[#EAEAEA] w-[50px] h-[50px] rounded-full p-4 flex justify-center items-center cursor-pointer">
      <Image src={search_icon} alt="Search" />
    </div>
  )
}

export default Search
