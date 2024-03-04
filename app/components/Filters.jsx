import React from 'react'

const Filters = ({ filters }) => {
  return (
    <div className="flex justify-center">
      <div className="grid md:grid-flow-col max-md:grid-cols-4 max-sm:grid-cols-3 gap-8 max-md:gap-5 max-sm:gap-2 p-8 max-md:p-5">
        {filters.map((filter) => (
          <div key={filter} className="uppercase max-sm:text-[12px]">
            {filter}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filters
