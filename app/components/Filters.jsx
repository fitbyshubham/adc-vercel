import React from 'react'

const Filters = ({ filters }) => {
  return (
    <div className="flex justify-between p-8">
      {filters.map((filter) => (
        <div key={filter} className="uppercase">
          {filter}
        </div>
      ))}
    </div>
  )
}

export default Filters
