import React from 'react'

const Filters = ({ filters }) => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-20 max-md:gap-5 p-8 max-md:p-5">
        {filters.map((filter) => (
          <div key={filter} className="uppercase">
            {filter}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filters
