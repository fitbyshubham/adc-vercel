import Button from '@/app/components/Button'
import Text from '@/app/components/Text'
import Image from 'next/image'
import speaker_img_not_found from '@/assets/images/speaker.png'
import Card from '@/app/components/Card'
import Link from 'next/link'

const ProgramView = () => {
  const header = 'CREATIVE SELFDIRECTION'
  const date = 'DONNERSTAG, 8. JUNI, 13 – 16 UHR'
  const info = `Schärfe dein berufliches Profil und entwickle deinen persönlichen Führungsstil im Workshop «Creative Selfdirection» von Pascal Geissbühler, Markenberater und Gründer von biographis.ch.
    Du arbeitest in einer Seniorposition in der Kreation und willst deine Karriere auf das nächste Level bringen? Dann melde dich an bei ADC forward – dem massgeschneiderten Leadership-Programm für (bis zu) 20 weibliche High-Potentials.`

  const speakerName = 'PASCAL GEISSBÜHLER'
  const speakerInfo =
    'Brand Strategist, Creative Coach und Organisationsentwickler, Gründer und Inhaber von Biographis'
  const speakerMoreInfo = `Profil schärfen und Positionierung stärken – Pascal Geissbühler zeigt, wie es geht. Als Markenberater, 
    Coach und Geschäftsführer von Biographis verhilft er nicht nur Unternehmen zu einer eigenständigen Identität und einer 
    schlagkräftigen Brand Strategy, sondern auch Einzelpersonen. In seinem Personal Coaching führt er Menschen auf den Weg zu einem 
    erfüllten Berufsleben und unterstützt sie bei der Karriereentwicklung, dem Personal Branding und dem persönlichen Auftreten. Dabei 
    greift Pascal Geissbühler auf seine umfangreiche Erfahrung aus seinem eigenen Weg zurück: Er war in der Geschäftsleitung einer 
    Brand Consultancy tätig, leitete Strategie- und Kreativteams in Change-Projekten und arbeitete als Texter-Konzepter und
    Medienjournalist. Nebenbei gibt er sein Wissen auch als Trainer und Dozent an der ETH Zürich, der ZHdK und an der Kalaidos
    Hochschule weiter. Ein spannendes Berufsprofil!`

  const cardInfo = `ADC forward findet erstmalig während der ADC Creative Days 2023 im Schloss Sihlberg statt.

    Für nur 195 CHF (3-Tagespass) bekommst du Zugang zu diesem und allen anderen Workshops, interessanten Talks, der ADC Award Ceremony und Partynacht.
    
    Teilnahme nur nach Anmeldung und mit dem Festivalpass, der vom 8. bis 10. Juni 2023 Zugang zu allen Talks und Events im Schloss Sihlberg gewährt.
    
    Die Platzzahl am Workshop ist limitiert: First come, first served.`

  return (
    <div className="p-20 max-md:p-5">
      <div className="pt-28 text-center">BACK</div>
      <div className="text-center max-sm:text-left">
        <Text twClassName="text-[120px] max-md:text-[55px] max-sm:text-[30px]">
          {header}
        </Text>
        <Text>{date}</Text>
        <p>{info}</p>
        <div className="pt-10">
          <Button primaryBtn={true} bgColor={'#000000'} width={187}>
            Jetzt anmelden
          </Button>
        </div>
      </div>
      <div className="flex max-sm:flex-col justify-between max-md:gap-5 pt-20">
        <div>
          <Image
            src={speaker_img_not_found}
            alt="Speaker"
            className="w-[360px] h-[360px] max-md:w-[229px] max-md:h-[229px] max-sm:w-[335px] max-sm:h-[335px]"
          />
          <div className="flex gap-3 text-[12px] pt-3">
            <Link href="#">{'LinkedIn'.toUpperCase()}</Link>
            <Link href="#">{'website'.toUpperCase()}</Link>
            <Link href="#">{'Instagram'.toUpperCase()}</Link>
          </div>
        </div>
        <div className="w-[752px] max-md:w-[479px] max-sm:w-[300px]">
          <Text fontSize={30} twClassName="leading-tight">
            {speakerName}
          </Text>
          <Text capitalize={true} fontSize={26}>
            {speakerInfo}
          </Text>
          <p className="text-[22px]">{speakerMoreInfo}</p>
        </div>
      </div>
      <div className="bg-[#EAEAEA] rounded-lg p-10 flex flex-col gap-5 w-[752px] max-md:w-full mt-20">
        <Text>ADC Forward</Text>
        <Text fontSize={15} capitalize={true}>
          {cardInfo}
        </Text>
        <Button
          primaryBtn={true}
          bgColor={'#000000'}
          width={150}
          style={{ fontSize: '12px' }}
        >
          ZUR HOTEL WEBSITE
        </Button>
      </div>
      <div className="flex flex-col items-center gap-10 pt-20">
        <Text>ALLE SPEAKERS</Text>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-28 max-md:gap-14">
          <Card
            imageCard={true}
            className="w-[308px] max-md:w-[200px]"
            name={'Pascal geissbühler'}
            title={'«Playful Exploration in Midjourney»'}
            description={'Donnerstag, 8. Juni // 15 – 17 UHR'}
            titleStyle={{ fontSize: 24 }}
            descriptionStyle={{ fontSize: 12 }}
          />
          <Card
            imageCard={true}
            className="w-[308px] max-md:w-[200px]"
            name={'Pascal geissbühler'}
            title={'«Playful Exploration in Midjourney»'}
            description={'Donnerstag, 8. Juni // 15 – 17 UHR'}
            titleStyle={{ fontSize: 24 }}
            descriptionStyle={{ fontSize: 12 }}
          />
          <Card
            imageCard={true}
            className="w-[308px] max-md:w-[200px]"
            name={'Pascal geissbühler'}
            title={'«Playful Exploration in Midjourney»'}
            description={'Donnerstag, 8. Juni // 15 – 17 UHR'}
            titleStyle={{ fontSize: 24 }}
            descriptionStyle={{ fontSize: 12 }}
          />
        </div>
      </div>
    </div>
  )
}

export default ProgramView
