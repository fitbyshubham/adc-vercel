'use client'
import Filters from '@/app/components/Filters'
import Text from '@/app/components/Text'
import { useSearchParams } from 'next/navigation'
import { insightPageFilters } from '../../utils/filters'
import { notFound } from 'next/navigation'
import Button from '@/app/components/Button'
import Card from '@/app/components/Card'
import { chunkArray } from '@/app/utils/arrayChunks'

const mapPage = {
  all: {
    header: 'all',
  },
  conscious: {
    header: 'conscious',
    subHeader:
      'Gemeinsam die Welt verändern. Kreative ESG-Benchmarks aus den Bereichen Umwelt, Soziales und Unternehmensführung.',
  },
  impulse: {
    header: 'impulse',
  },
  sparks: {
    header: 'Sparks',
  },
  'queens-and-kings': {
    header: 'queens and kings',
  },
  'point-of-view': {
    header: 'point of view',
  },
  picky: {
    header: 'picky',
  },
}

const Category = () => {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const pageFixedData = mapPage[type]

  if (!pageFixedData) {
    return notFound()
  }

  const cards3 = [
    {
      id: 1,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 2,
      description: 'Fünf Kreative und ihre Bürosessel',
      size: 'small',
    },
    {
      id: 3,
      description: 'Sesselwechsel auch ohne Jobwechsel.',
      size: 'small',
    },
    {
      id: 4,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 5,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 6,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 7,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 8,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 9,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 10,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 11,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 1,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 2,
      description: 'Fünf Kreative und ihre Bürosessel',
      size: 'small',
    },
    {
      id: 3,
      description: 'Sesselwechsel auch ohne Jobwechsel.',
      size: 'small',
    },
    {
      id: 4,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 5,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 6,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 7,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 8,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 9,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 10,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 11,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 1,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 2,
      description: 'Fünf Kreative und ihre Bürosessel',
      size: 'small',
    },
    {
      id: 3,
      description: 'Sesselwechsel auch ohne Jobwechsel.',
      size: 'small',
    },
    {
      id: 4,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 5,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 6,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 7,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 8,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 9,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 10,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 11,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 1,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 2,
      description: 'Fünf Kreative und ihre Bürosessel',
      size: 'small',
    },
    {
      id: 3,
      description: 'Sesselwechsel auch ohne Jobwechsel.',
      size: 'small',
    },
    {
      id: 4,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 5,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 6,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 7,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 8,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 9,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 10,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 11,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 1,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 2,
      description: 'Fünf Kreative und ihre Bürosessel',
      size: 'small',
    },
    {
      id: 3,
      description: 'Sesselwechsel auch ohne Jobwechsel.',
      size: 'small',
    },
    {
      id: 4,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 5,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 6,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 7,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 8,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 9,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 10,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 11,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 1,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 2,
      description: 'Fünf Kreative und ihre Bürosessel',
      size: 'small',
    },
    {
      id: 3,
      description: 'Sesselwechsel auch ohne Jobwechsel.',
      size: 'small',
    },
    {
      id: 4,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 5,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 6,
      description: 'Origineller mit Yoga',
      size: 'small',
    },
    {
      id: 7,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 8,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 9,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 10,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 11,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 10,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 11,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },

    {
      id: 10,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 11,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 10,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 11,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 10,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
    {
      id: 11,
      description: 'Mode, die einem nur im Traum einfällt',
      size: 'small',
    },
  ]

  return (
    <div className="pt-20">
      <Filters filters={insightPageFilters} activeFilter={type} />
      <Text twClassName="text-center text-[55px]">{pageFixedData.header}</Text>
      <div className="flex flex-col items-center gap-20 pt-16">
        {chunkArray(cards3).map((items, index) => (
          <div key={index} className="flex gap-10">
            {items.map((card, index) => (
              <div key={index}>
                <Card
                  description={card.description}
                  size={card.size}
                  componentStyle={{ width: 250, minHeight: 250 }}
                />
              </div>
            ))}
          </div>
        ))}
        <div className="py-10">
          <Button onButtonClick={() => {}} width={160}>
            WEITERE LADEN
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Category