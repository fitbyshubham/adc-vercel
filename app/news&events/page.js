import React from 'react'
import Search from '../components/Search'
import Card from '../components/Card'
import Button from '../components/Button'

const NewsAndEvents = () => {
  const cards1 = [
    {
      id: 1,
      title: 'ADC Switzerland: Acht neue Mitglieder',
      headline: '19.12.2023',
      covered: true,
      imageCard: false,
      buttonText: 'WEITERLESEN',
      btnWidth: 150,
      btnBgColor: '#ffffff',
      btnTextColor: '#000000',
    },
    {
      id: 2,
      title: 'Fertig lustig?',
      headline: '19.12.2023',
      covered: true,
      imageCard: false,
      buttonText: 'WEITERLESEN',
      btnWidth: 150,
      btnBgColor: '#ffffff',
      btnTextColor: '#000000',
    },
    {
      id: 3,
      title: 'ADC Switzerland: Acht neue Mitglieder',
      headline: '19.12.2023',
      covered: true,
      imageCard: true,
      buttonText: 'WEITERLESEN',
      btnWidth: 150,
      btnBgColor: '#ffffff',
      btnTextColor: '#000000',
    },
    {
      id: 4,
      title:
        'ADC Young Creatives Award 2024 – Pre-Selection Cannes Young Lions Competition',
      headline: '19.12.2023',
      covered: true,
      imageCard: false,
      buttonText: 'WEITERLESEN',
      btnWidth: 150,
      btnBgColor: '#ffffff',
      btnTextColor: '#000000',
    },
  ]

  return (
    <div className="flex flex-col items-center">
      <div className="p-20 pt-28">
        <Search />
      </div>
      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8">
        {cards1.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            headline={card.headline}
            covered={card.covered}
            imageCard={card.imageCard}
            buttonText={card.buttonText}
            btnWidth={150}
            btnBgColor={'#ffffff'}
            btnTextColor={'#000000'}
          />
        ))}
      </div>
      <div className="p-20">
        <Button width={180}>weitere anzeigen</Button>
      </div>
    </div>
  )
}

export default NewsAndEvents
