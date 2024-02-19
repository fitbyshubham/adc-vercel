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

  const marquee4Content = {
    mixedContent: [
      { content: 'Jetzt', visible: true },
      {
        image:
          'https://i.ibb.co/6rSJLCb/Bildschirmfoto-2023-12-18-um-11-12.png',
        visible: true,
      },
      {
        image:
          'https://i.ibb.co/6rSJLCb/Bildschirmfoto-2023-12-18-um-11-12.png',
        visible: true,
      },
      {
        image:
          'https://i.ibb.co/6rSJLCb/Bildschirmfoto-2023-12-18-um-11-12.png',
        visible: true,
      },
      { content: 'anmelden', visible: true },
      {
        image:
          'https://i.ibb.co/6rSJLCb/Bildschirmfoto-2023-12-18-um-11-12.png',
        visible: true,
        single: true,
      },
      { content: 'Zum YCA Warm-Up Event', visible: true },
    ],
    visible: true,
  }

  if (loading) return null

  return (
    <main>
      <div className="gradient-background">
        <div className="flex justify-center items-center h-[45rem]">
          <Marquee speed={200} textSize={220}>
            <MarqueeChildren data={pageData.headline1} />
          </Marquee>
          <div
            className="w-[205px] h-[205px] max-md:w-[150px] max-md:h-[150px] p-10 top-[23rem] right-[18rem] max-md:right-[2rem] rounded-full flex-col justify-center items-center gap-5 absolute bg-black text-white z-10"
            style={{ display: pageData.poster1.visible ? 'flex' : 'none' }}
          >
            <div className="uppercase text-[22px] max-md:text-[14px] text-center">
              {pageData.poster1.title}
            </div>
            <div className="text-sm max-sm:text-[8px]">
              {pageData.poster1.subTitle}
            </div>
          </div>
        </div>
      </div>
      <div className="max-sm:hidden">
        <Filters filters={filters} />
      </div>
      <div className=" container mx-auto px-4 pt-10">
        <div className="grid grid-cols-12 gap-4">
          <div
            className="col-span-6 md:col-start-5 md:col-span-8 lg:col-start-5 lg:col-span-6"
            style={{ display: pageData.cards1[1].visible ? 'flex' : 'none' }}
          >
            <Card
              title={pageData.cards1[1].title}
              description={pageData.cards1[1].description}
              buttonText={pageData.cards1[1].button.title}
              size={pageData.cards1[1].size}
            />
          </div>
          <div
            className="col-span-3 md:col-span-3 lg:col-span-3"
            style={{ display: pageData.cards1[0].visible ? 'flex' : 'none' }}
          >
            <Card
              title={pageData.cards1[0].title}
              description={pageData.cards1[0].description}
              buttonText={pageData.cards1[0].button.title}
              size={pageData.cards1[0].size}
            />
          </div>
          <div
            className="col-span-5 md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-5"
            style={{ display: pageData.cards1[2].visible ? 'flex' : 'none' }}
          >
            <Card
              title={pageData.cards1[2].title}
              description={pageData.cards1[2].description}
              buttonText={pageData.cards1[2].button.title}
              size={pageData.cards1[2].size}
            />
          </div>

          {/* <div
          className="lg:row-start-1 lg:row-end-4"
          style={{ display: pageData.cards1[1].visible ? 'flex' : 'none' }}
        >
          <Card
            title={pageData.cards1[1].title}
            content={pageData.cards1[1].description}
            buttonText={pageData.cards1[1].button.title}
            size={pageData.cards1[1].size}
          />
        </div>
        <div
          className="lg:row-start-1 lg:row-end-4"
          style={{ display: pageData.cards1[1].visible ? 'flex' : 'none' }}
        >
          <Card
            title={pageData.cards1[1].title}
            content={pageData.cards1[1].description}
            buttonText={pageData.cards1[1].button.title}
            size={pageData.cards1[1].size}
          />
        </div> */}
        </div>
      </div>
      <div className="flex justify-center p-20">
        <Button primaryBtn={true} width={200}>
          MITGLIED WERDEN
        </Button>
      </div>
      <div className="border-b-[1px] border-t-[1px] border-black mt-10">
        <div className="p-1">
          <Marquee speed={200} textSize={150}>
            <MarqueeChildren
              data={{
                content: 'Jetzt anmelden zum YCA Warm-Up Event',
                visible: true,
              }}
            />
          </Marquee>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-28 pt-24 pb-24 p-5">
        <div>NEWS & EVENTS</div>
        <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 gap-8">
          <Card
            title={'ADC Switzerland: Acht neue Mitglieder'}
            headline={'19.12.2023'}
            covered={true}
            buttonText={'Weiterlesen'}
            btnBgColor={'#ffffff'}
            btnTextColor={'#000000'}
          />
          <Card
            title={'Fertig lustig?'}
            headline={'19.12.2023'}
            covered={true}
            imageCard={false}
            buttonText={'Weiterlesen'}
            btnBgColor={'#ffffff'}
            btnTextColor={'#000000'}
          />
          <Card
            title={
              'ADC Young Creatives Award 2024 – Pre-Selection Cannes Young Lions Competition'
            }
            headline={'19.12.2023'}
            covered={true}
            imageCard={false}
            buttonText={'Weiterlesen'}
            btnBgColor={'#ffffff'}
            btnTextColor={'#000000'}
          />
          <Card
            title={
              'ADCE Awards 2023: 13 Trophäen für die Schweiz, Gold für Wirz'
            }
            headline={'19.12.2023'}
            covered={true}
            imageCard={false}
            buttonText={'Weiterlesen'}
            btnBgColor={'#ffffff'}
            btnTextColor={'#000000'}
          />
        </div>
        <div>
          <Button primaryBtn={true} width={180}>
            ALLE ANZEIGEN
          </Button>
        </div>
      </div>
      <div className="border-b-[1px] border-t-[1px] border-black mt-10">
        <div className="p-1">
          <Marquee speed={200} textSize={150}>
            <MarqueeChildren
              data={{
                content: 'Jetzt anmelden zum YCA Warm-Up Event',
                visible: true,
              }}
            />
          </Marquee>
        </div>
      </div>
      <div className="border-b-[1px] border-black mb-20">
        <div className="p-1">
          <Marquee speed={200} textSize={150}>
            <MarqueeChildren data={marquee4Content} />
          </Marquee>
        </div>
      </div>
    </main>
  )
}
