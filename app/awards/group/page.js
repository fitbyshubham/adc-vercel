'use client'
import Filters from '@/app/components/Filters'
import Text from '@/app/components/Text'
import { useSearchParams } from 'next/navigation'
import { awardsFilters } from '../../utils/filters'
import { notFound } from 'next/navigation'
import Button from '@/app/components/Button'
import Card from '@/app/components/Card'
import { chunkArray } from '@/app/utils/arrayChunks'

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
    </div>
  )
}

export default Category
