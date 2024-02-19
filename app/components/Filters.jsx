import React from 'react'

const Filters = ({ filters }) => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-20 p-8">
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
