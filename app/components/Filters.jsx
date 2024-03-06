import Link from 'next/link'

const Filters = ({ filters, activeFilter }) => {
  return (
    <div className="flex justify-center">
      <div className="grid md:grid-flow-col max-md:grid-cols-4 max-sm:grid-cols-3 gap-8 max-md:gap-5 max-sm:gap-2 p-8 max-md:p-5">
        {filters.map((filter) => (
          <div key={filter.id} className="flex flex-col gap-1 items-center ">
            <Link
              href={filter.path + filter.id}
              className="uppercase max-sm:text-[12px]"
            >
              {filter.text}
            </Link>
            <div
              className={`w-[7px] h-[7px] bg-black rounded-full ${
                activeFilter && activeFilter === filter.id ? '' : 'hidden'
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filters
