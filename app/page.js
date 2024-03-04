'use client'
import { useEffect, useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import Filters from './components/Filters'
import Marquee from './components/Marquee'
import MarqueeChildren from './components/MarqueeChildren'
import Api from './api'
import './style.css'
import Poster from './components/Poster'
import Text from './components/Text'
import Loading from './components/Loading'

export default function Home() {
  const [pageData, setPageData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Api.getHomePage()
      .then((res) => {
        const data = res.data.attributes
        setPageData(data)
        setLoading(false)
      })
      .catch(console.log)
  }, [])

  const filters = [
    'INSIGHTS',
    'Learning',
    'Creative Days',
    'ADC Awards',
    'People',
  ]

  const cardsClassName = [
    'col-span-6 md:col-start-5 md:col-span-8 lg:col-start-5 lg:col-span-6',
    'col-span-3 md:col-span-3 lg:col-span-3',
    'col-span-5 md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-5',
  ]

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <Loading size="lg" />
      </div>
    )

  return (
    <main>
      <div className="gradient-background">
        <div className="flex justify-center items-center h-[45rem]">
          <Marquee speed={200} textSize={220}>
            <MarqueeChildren content={pageData?.hero?.headline?.text} />
          </Marquee>
        </div>
        <Poster
          visible={pageData?.hero?.poster?.visible}
          title={pageData?.hero?.poster?.title}
          subTitle={pageData?.hero?.poster?.subTitle}
        />
      </div>
      <Filters filters={filters} />
      <div className=" container mx-auto px-4 pt-10">
        <div className="grid grid-cols-12 max-sm:grid-cols-1 gap-4">
          {pageData.insights.map((insight, index) => (
            <div className={cardsClassName[index]} key={insight.id}>
              <Card
                title={insight?.title}
                description={insight?.description}
                buttonText="Weiterlesen"
                imageUrl={insight?.image?.path.data.attributes.url}
                size={insight?.size}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center p-20">
        <Button primaryBtn={true} width={200}>
          MITGLIED WERDEN
        </Button>
      </div>
      <div
        className={
          pageData?.headline1?.visible
            ? 'border-b-[1px] border-t-[1px] border-black mt-10'
            : ''
        }
      >
        <div className="p-1">
          <Marquee speed={200} textSize={150}>
            <MarqueeChildren
              content={pageData?.headline1?.headline?.text}
              images={pageData?.headline1?.headline?.images}
              visible={pageData?.headline1?.visible}
            />
          </Marquee>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-28 pt-24 pb-24 p-5">
        <Text>NEWS & EVENTS</Text>
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8">
          {pageData.highlightedEvents.map((event) => (
            <Card
              key={event.id}
              title={event?.title}
              imageCard={Boolean(event.image)}
              imageUrl={event.image?.path.data.attributes.url}
              heading={event.heading}
              covered={true}
              buttonText="WEITERLESEN"
              btnBgColor={'#ffffff'}
              btnTextColor={'#000000'}
            />
          ))}
        </div>
        <div>
          <Button primaryBtn={true} width={180}>
            ALLE ANZEIGEN
          </Button>
        </div>
      </div>
      <div
        className={
          pageData?.headline2?.visible
            ? 'border-b-[1px] border-t-[1px] border-black mt-10'
            : 'border-b-[1px] border-black '
        }
      >
        <div className="p-1">
          <Marquee speed={200} textSize={150}>
            <MarqueeChildren
              content={pageData?.headline2?.headline?.text}
              images={pageData?.headline2?.headline.images}
              visible={pageData?.headline2?.visible}
            />
          </Marquee>
        </div>
      </div>
      <div
        className={
          pageData?.headline3?.visible
            ? 'border-b-[1px] border-black mb-20'
            : 'mb-20'
        }
      >
        <div className="p-1">
          <Marquee speed={200} textSize={150}>
            <MarqueeChildren
              content={pageData?.headline3?.headline.text}
              images={pageData?.headline3?.headline.images}
              visible={pageData?.headline3?.visible}
            />
          </Marquee>
        </div>
      </div>
    </main>
  )
}
