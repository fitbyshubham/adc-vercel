'use client'
import Filters from '@/app/components/Filters'
import { notFound, useSearchParams } from 'next/navigation'
import { awardsFilters } from '../../utils/filters'
import Ranking from './Ranking'
import Winners from './Winners'

const Category = () => {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const pageExist = awardsFilters.map((page) => page.id).includes(type)

  if (!pageExist) {
    return notFound()
  }

  return (
    <div className="pt-20">
      <Filters filters={awardsFilters} activeFilter={type} />
      <Winners type={type} />
      <Ranking type={type} />
    </div>
  )
}

export default Category
