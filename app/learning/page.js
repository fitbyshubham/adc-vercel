import React from 'react'
import Filters from '../components/Filters'
import Card from '../components/Card'
import Info from '../components/Info'
import Impressionen from '../components/Impressionen'

const Learning = () => {
  const filters = ['All school', 'ADC forward', 'ADC mentoring', 'coffee case']

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
      <div className="flex justify-center p-28">
        <Info
          title={'für die nächste generation'}
          description={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. '
          }
        />
      </div>
      <Impressionen />
    </div>
  )
}

export default Learning
