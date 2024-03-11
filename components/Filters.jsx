import Link from "next/link"

const Filters = ({ filters, activeFilter, textColor }) => {
  return (
    <div className="flex flex-wrap w-full justify-between sticky top-[90px] z-40 px-8 gap-8 max-md:p-5">
      {filters.map((filter) => (
        <div key={filter.id} className="flex flex-col gap-1 items-center ">
          <Link
            href={filter.path + filter.id}
            className="uppercase"
            style={{
              color: textColor,
            }}
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
