import Button from './components/Button'
import Card from './components/Card'
import Filters from './components/Filters'
import Marquee from './components/Marquee'
import './style.css'

export default function Home() {
  const filters = [
    'INSIGHTS',
    'Learning',
    'Creative Days',
    'ADC Awards',
    'People',
  ]

  return (
    <main>
      <div className="gradient-background">
        <div className="flex justify-center items-center h-[45rem]">
          <Marquee scrollamount={15} textSize={220}>
            ZEIGEN WIE’s GEHT
          </Marquee>
          <div className="w-[205px] h-[205px] max-md:w-[150px] max-md:h-[150px] p-10 top-[23rem] right-[18rem] max-md:right-[2rem] rounded-full flex flex-col justify-center items-center gap-5 absolute bg-black text-white">
            <div className="uppercase text-[22px] max-md:text-[14px] text-center">
              Creative Days 2024
            </div>
            <div className="text-sm max-sm:text-[8px]">MEHR ERFAHREN</div>
          </div>
        </div>
      </div>
      <div className="max-sm:hidden">
        <Filters filters={filters} />
      </div>
      <div className="grid grid-cols-2 gap-20 p-32 max-sm:grid-cols-1 max-sm:p-10 max-sm:gap-5">
        <div className="lg:row-start-2 lg:row-span-1">
          <Card
            title={'Die einem nur im Traum einfällt'}
            content={
              'Bläst sie auf 3000 Metern entgegen, den anderen kommt sie beim Kartoffelschälen und wieder anderen beim Anblick eines schlafenden Prinzen: Die beste Idee.'
            }
            buttonText={'Weiterlesen'}
          />
        </div>
        <div className="lg:row-start-1 lg:row-end-4">
          <Card
            title={'Mode, die einem nur im Traum einfällt'}
            content={
              'Den einen bläst sie auf 3000 Metern entgegen, den anderen kommt sie beim Kartoffelschälen und wieder anderen beim Anblick eines schlafenden Prinzen: Die beste Idee.'
            }
            size={'large'}
            buttonText={'Weiterlesen'}
          />
        </div>
      </div>
      <div className="flex justify-center p-20">
        <Button primaryBtn={true} width={200}>
          MITGLIED WERDEN
        </Button>
      </div>
      <div className="border-b-[1px] border-t-[1px] border-black mt-10">
        <div className="p-1">
          <Marquee scrollamount={15} textSize={150}>
            Jetzt anmelden zum YCA Warm-Up Event
          </Marquee>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-28 pt-24 pb-24 p-5">
        <div>NEWS & EVENTS</div>
        <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 gap-8">
          <Card
            title={'ADC Switzerland: Acht neue Mitglieder'}
            date={'19.12.2023'}
            covered={true}
            buttonText={'Weiterlesen'}
            btnBgColor={'#ffffff'}
            btnTextColor={'#000000'}
          />
          <Card
            title={'Fertig lustig?'}
            date={'19.12.2023'}
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
            date={'19.12.2023'}
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
            date={'19.12.2023'}
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
          <Marquee scrollamount={15} textSize={150}>
            Jetzt anmelden zum YCA Warm-Up Event
          </Marquee>
        </div>
      </div>
      <div className="border-b-[1px] border-black mb-20">
        <div className="p-1">
          <Marquee scrollamount={15} textSize={150}>
            Jetzt anmelden zum YCA Warm-Up Event
          </Marquee>
        </div>
      </div>
    </main>
  )
}
