import Button from '../components/Button'
import Card from '../components/Card'
import Filters from '../components/Filters'
import Text from '../components/Text'

const ModulesOverview = () => {
  const filters = [
    'Creative Days 2024',
    'Program',
    'Referenten',
    'Galerie',
    'PReise & Tickets',
    'More',
  ]

  const cards1 = [
    {
      id: 1,
      description:
        'Zündende Ideen, die das Feuer kommunikativer Leuchttürmen entfachen und mit leuchtendem Beispiel vorangehen.',
      headline: 'Sparks',
      covered: true,
      imageCard: false,
      buttonText: 'Artikel ansehen',
      btnWidth: 150,
      btnBgColor: '#ffffff',
      btnTextColor: '#000000',
    },
    {
      id: 2,
      description:
        'Zündende Ideen, die das Feuer kommunikativer Leuchttürmen entfachen und mit leuchtendem Beispiel vorangehen.',
      headline: 'Impulse',
      covered: true,
      imageCard: false,
      buttonText: 'Artikel ansehen',
      btnWidth: 150,
      btnBgColor: '#ffffff',
      btnTextColor: '#000000',
    },
    {
      id: 3,
      description:
        'Zündende Ideen, die das Feuer kommunikativer Leuchttürmen entfachen und mit leuchtendem Beispiel vorangehen.',
      headline: 'Impulse',
      covered: true,
      imageCard: false,
      buttonText: 'Artikel ansehen',
      btnWidth: 150,
      btnBgColor: '#ffffff',
      btnTextColor: '#000000',
    },
    {
      id: 4,
      description:
        'Zündende Ideen, die das Feuer kommunikativer Leuchttürmen entfachen und mit leuchtendem Beispiel vorangehen.',
      headline: 'Impulse',
      covered: true,
      imageCard: false,
      buttonText: 'Artikel ansehen',
      btnWidth: 150,
      btnBgColor: '#ffffff',
      btnTextColor: '#000000',
    },
    {
      id: 5,
      description:
        'Zündende Ideen, die das Feuer kommunikativer Leuchttürmen entfachen und mit leuchtendem Beispiel vorangehen.',
      headline: 'Impulse',
      covered: true,
      imageCard: false,
      buttonText: 'Artikel ansehen',
      btnWidth: 150,
      btnBgColor: '#ffffff',
      btnTextColor: '#000000',
    },
    {
      id: 5,
      description:
        'Zündende Ideen, die das Feuer kommunikativer Leuchttürmen entfachen und mit leuchtendem Beispiel vorangehen.',
      headline: 'Impulse',
      covered: true,
      imageCard: false,
      buttonText: 'Artikel ansehen',
      btnWidth: 150,
      btnBgColor: '#ffffff',
      btnTextColor: '#000000',
    },
    {
      id: 6,
      description:
        'Zündende Ideen, die das Feuer kommunikativer Leuchttürmen entfachen und mit leuchtendem Beispiel vorangehen.',
      headline: 'Impulse',
      covered: true,
      imageCard: false,
      buttonText: 'Artikel ansehen',
      btnWidth: 150,
      btnBgColor: '#ffffff',
      btnTextColor: '#000000',
    },
  ]

  const cards2 = [
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
  ]

  return (
    <div className="pt-20">
      <Filters filters={filters} />
      <div className=" container mx-auto px-4 pt-10 pb-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 md:col-start-5 md:col-span-8 lg:col-start-5 lg:col-span-6">
            <Card
              title={'Fünf Kreative und ihre BÜrosessel'}
              description={'Sesselwechsel auch ohne Jobwechsel.'}
              buttonText={'Weiterlesen'}
              size={'small'}
            />
          </div>
          <div className="col-span-3 md:col-span-3 lg:col-span-3">
            <Card
              title={'Heureka'}
              description={
                'Den einen bläst sie auf 3000 Metern entgegen, den anderen kommt sie beim Kartoffelschälen und wieder anderen beim Anblick eines schlafenden Prinzen: Die beste Idee.'
              }
              buttonText={'Weiterlesen'}
              size={'large'}
            />
          </div>
          <div className="col-span-5 md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-5">
            <Card
              title={'Heureka'}
              description={
                'Den einen bläst sie auf 3000 Metern entgegen, den anderen kommt sie beim Kartoffelschälen und wieder anderen beim Anblick eines schlafenden Prinzen: Die beste Idee.'
              }
              buttonText={'Weiterlesen'}
              size={'small'}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-28 pt-24 pb-24">
        <Text fontSize={24} style={{ textAlign: 'center' }}>
          KATEGORIEN
        </Text>
        <div
          className="overflow-x-auto w-[99%] self-end"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="flex gap-5 ">
            {cards1.map((card) => (
              <Card
                key={card.id}
                description={card.description}
                headline={card.headline}
                covered={true}
                imageCard={false}
                buttonText={card.buttonText}
                componentStyle={{ minWidth: '250px' }}
                btnWidth={150}
                btnBgColor={'#ffffff'}
                btnTextColor={'#000000'}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Text fontSize={24}>Weitere Artikel</Text>
        <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-24 max-md:gap-16 max-sm:gap-8 pt-20 max-sm:pt-10">
          {cards2.map((card) => (
            <div key={card.id}>
              <Card
                description={card.description}
                size={card.size}
                componentStyle={{ minHeight: 200 }}
                className={'w-[250px] max-md:w-[105px]'}
              />
            </div>
          ))}
        </div>
        <div className="p-20">
          <Button primaryBtn={true} bgColor={'#000000'} width={180}>
            weiter zu insights
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ModulesOverview
