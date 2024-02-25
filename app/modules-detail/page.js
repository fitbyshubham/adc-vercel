import Card from '../components/Card'
import Filters from '../components/Filters'
import Text from '../components/Text'
import ProgramDays from './ProgramDays'

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
    <div className="pt-20">
      <Filters filters={filters} />
      <div className="p-20">
        <Text fontSize={120} style={{ textAlign: 'center' }}>
          Programm
        </Text>
        <div className="flex justify-between pt-16">
          <ProgramDays data={programList} />
          <div>
            <Card
              description={'Festival Pass'.toUpperCase()}
              size={'small'}
              buttonText={'JETZT KAUFEN'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModulesDetail
