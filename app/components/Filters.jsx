import Link from "next/link"

const Filters = ({ filters, activeFilter, textColor }) => {
  return (
    <div className="flex justify-between max-md:p-5 px-5">
      {filters.map((filter) => (
        <div key={filter.id} className="flex flex-col gap-1 items-center ">
          <Link
            href={filter.path + filter.id}
            className="uppercase max-sm:text-[12px]"
            style={{ color: textColor }}
          >
            {filter.text}
          </Link>
          <div
            className={`w-[7px] h-[7px] bg-black rounded-full ${
              activeFilter && activeFilter === filter.id ? "" : "hidden"
            }`}
          ></div>
        </div>
      ))}
    </div>
  )
}

export default Filters
