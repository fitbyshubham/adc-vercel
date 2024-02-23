'use client'
import { useEffect, useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import Filters from './components/Filters'
import Marquee from './components/Marquee'
import MarqueeChildren from './components/MarqueeChildren'
import Api from './api'
import './style.css'

export default function Home() {
  const [pageData, setPageData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Api.getHomePage()
      .then((res) => {
        const data = res.data.attributes
        console.log(data)
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

  if (loading) return null

  return (
    <main>
      <div className="gradient-background">
        <div className="flex justify-center items-center h-[45rem]">
          <Marquee speed={200} textSize={220}>
            <MarqueeChildren content={pageData.heading.content} />
          </Marquee>
          <div
            className="w-[205px] h-[205px] max-md:w-[150px] max-md:h-[150px] p-10 top-[23rem] right-[18rem] max-md:right-[2rem] rounded-full flex-col justify-center items-center gap-5 absolute bg-black text-white z-10"
            style={{
              display: pageData.heading.poster.visible ? 'flex' : 'none',
            }}
          >
            <div className="uppercase text-[22px] max-md:text-[14px] text-center">
              {pageData.heading.poster.title}
            </div>
            <div className="text-sm max-sm:text-[8px]">
              {pageData.heading.poster.subTitle}
            </div>
          </div>
        </div>
      </div>
      <div className="max-sm:hidden">
        <Filters filters={filters} />
      </div>
      <div className=" container mx-auto px-4 pt-10">
        <div className="grid grid-cols-12 gap-4">
          {pageData.cards1.map((card, index) => (
            <div className={cardsClassName[index]} key={card.id}>
              <Card
                title={card.title}
                description={card.description}
                buttonText={card.button.title}
                imageUrl={card.image.url.data.attributes.url}
                size={card.size}
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
              content={pageData.headline1.content}
              images={pageData.headline1.images}
              visible={pageData.headline1.visible}
            />
          </Marquee>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-28 pt-24 pb-24 p-5">
        <div>NEWS & EVENTS</div>
        <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 gap-8">
          {pageData.cards2.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              imageCard={Boolean(card.image)}
              imageUrl={card.image?.url.data.attributes.url}
              heading={card.heading}
              covered={true}
              buttonText={card.button.title}
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
              content={pageData.headline2.content}
              images={pageData.headline2.images}
              visible={pageData.headline2.visible}
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
              content={pageData.headline3.content}
              images={pageData.headline3.images}
              visible={pageData.headline3.visible}
            />
          </Marquee>
        </div>
      </div>
    </main>
  )
}
