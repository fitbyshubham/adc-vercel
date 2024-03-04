'use client'
import Card from '../components/Card'
import Filters from '../components/Filters'
import Text from '../components/Text'
import ProgramDays from './ProgramDays'
import Image from 'next/image'
import no_image_found from '@/assets/images/bildschirmfoto.png'
import Button from '../components/Button'

const ModulesDetail = () => {
  const filters = ['Program', 'Speakers', 'Tickets', 'Location']
  const programList = [
    {
      id: '1',
      date: 'DONNERSTAG - 8. JUNI 2023',
      programsDetail: [
        {
          id: '1',
          time: '13 — 15 Uhr',
          title: 'DORA OSINDE «COME AS YOU ARE» ADC FORWARD',
          link: '#',
        },
        {
          id: '2',
          time: '13 — 15 Uhr',
          title: 'DORA OSINDE «COME AS YOU ARE» ADC FORWARD',
          link: '#',
        },
        {
          id: '3',
          time: '13 — 15 Uhr',
          title: 'DORA OSINDE «COME AS YOU ARE» ADC FORWARD',
          link: '#',
        },
      ],
      programSortDetail: [
        {
          id: '1',
          time: '13 — 15 Uhr',
          title: 'Swissfilm Association',
          info: 'Im Rahmen der ADC Creative Days 2023 findet erneut ein Get-together Abend, welcher von der SWISSFILM ASSOCIATION zusammen mit dem ADC Switzerland organisiert wird, statt und an die legendären Swiss Partys in Cannes angelehnt ist – inklusive einer Diversity Review von Werbespots aus den 80ern und 90ern, kommentiert mit einem Augenzwinkern und viel Humor von Comedian Leila Ladari.Guest List only!',
        },
      ],
    },
    {
      id: '2',
      date: 'DONNERSTAG - 8. JUNI 2023',
      programsDetail: [
        {
          id: '1',
          time: '1 — 5 Uhr',
          title: 'DORA OSINDE«COME AS YOU ARE»ADC FORWARD',
          link: '#',
        },
      ],
    },
  ]

  return (
    <div className="max-md:flex max-md:justify-center">
      <div className="pt-20">
        <div>
          <Filters filters={filters} />
        </div>
        <div className="p-20 max-md:p-5">
          <Text
            style={{ textAlign: 'center' }}
            twClassName={
              'text-center text-[120px] max-md:text-[55px] max-sm:text-[30px]'
            }
          >
            Program
          </Text>
          <div className="flex max-sm:flex-col justify-between max-md:gap-8 pt-16 max-sm:pt-4">
            <div className="sm:hidden flex gap-5">
              <Image
                src={no_image_found}
                alt="Image"
                className="w-[98px] h-[98px]"
              />
              <div className="flex flex-col gap-4">
                <Text>{'Festival Pass'}</Text>
                <Button onButtonClick={() => {}} width={130}>
                  {'JETZT KAUFEN'}
                </Button>
              </div>
            </div>
            <ProgramDays data={programList} />
            <div className="max-sm:hidden">
              <Card
                description={'Festival Pass'.toUpperCase()}
                size={'small'}
                buttonText={'JETZT KAUFEN'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModulesDetail
