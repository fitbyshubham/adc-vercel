import Image from 'next/image'
import no_image_found from '@/assets/images/bildschirmfoto.png'
import Text from '../components/Text'
import Button from '../components/Button'
import Card from '../components/Card'

const Detail = ({ content, img, cardTitle, cardDescription, size }) => {
  return (
    <div className="flex  max-sm:flex-col justify-between max-md:gap-5 max-sm:gap-10">
      <div
        className={
          'text-[24px] max-md:text-[22px] w-[750px] max-md:w-[460px] max-sm:w-[335px]'
        }
      >
        {content}
      </div>
      <Card
        imageCard={true}
        imageUrl={img}
        title={cardTitle}
        titleStyle={{ fontSize: '16px' }}
        descriptionStyle={{ fontSize: '15px' }}
        className={'w-[262px] max-md:w-[200px]'}
        size={size}
        description={cardDescription}
      />
    </div>
  )
}

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

const StoryDetail = () => {
  const title = `Die Royal Oak unter den Hotels`
  const subTitle = `Audemars Piguet setzt auch mit dem Hôtel des Horlogers neue Massstäbe und gibt dem Watch Valley ein Wahrzeichen.`
  const author = 'Silvia Affolter'
  const date = 'Dezember 2023'
  const content1 = `Einst Avantgarde, heute Ikone. Was für die Royal Oak, die begehrte Galionsfigur aus dem Hause Audemars Piguet gilt, könnte man auch auf die Bauten der Schweizer Uhrenmanufakturgruppe münzen. Zuerst die Eröffnung des spektakulären Musée Atelier in Le Brassus: Das Museum schmiegt sich als lichtdurchflutete Glasspirale an das älteste Gebäude des Unternehmenssitzes und wirkt von oben betrachtet wie eine grüne Schnecke, die natürlich in die Landschaft zu gehören scheint. Besucherinnen und Besucher können den Kunsthandwerkerinnen dort quasi auf die Finger schauen, wenn sie einige der kompliziertesten Prachtstücke vollenden. Und nun geht das neue Hôtel des Horlogers – vom dänischen Entwickler BIG – Bjarke Ingels Group in Zusammenarbeit mit dem Schweizer Architekturbüro CCHE entworfen und umgesetzt – in seinem Erscheinungsbild eine Symbiose mit dem Vallée de Joux ein.`
  const content2 = `Fünfzig Zimmer und Suiten, Konferenzräume, drei Restaurants, eine Bar, Wellnessund Fitnessbereich und eine grosse Bibliothek zum Thema Inspiration laden zum Besuch des ehrfürchtigen Tals, der Wiege der Uhrmacherkunst ein. Das Innenleben des Boutiquehotels wurde durch Pierre Minassian von AUM gestaltet. Wer die Lobby betritt, sieht keinen einzigen Zeitmesser, der für gewöhnlich jede Hotelhalle ziert. Ich mache mich auf die Suche. Auch nicht auf den Zimmern, ja nicht einmal im Fitnessraum erinnert eine Uhr an die Vergänglichkeit. «Das Hôtel des Horlogers ist ein Geschenk an alle Uhrmacher aus der Region und steht nicht für eine bestimmte Manufaktur», erklärt General Manager André Cheminade. Das Hotel ist zwar nigelnagelneu, doch die Tradition reicht bis 1857 zurück. Das Hôtel de France, wie es ursprünglich hiess, war Treffpunkt aller Uhrmacher und Ateliers aus dem Juragebiet. Von hier aus wurden per Pferdepost die edlen Zeitmesser nach Genf und von dort in alle Welt verschickt. So wurde aus dem Niemandsland Le Brassus die Bastion der High-End-Uhrmacherei und die Pilgerstätte für Tausende von Aficionados, die gerne weit über 100 000 Franken für ein handgefertigtes Meisterwerk hinblättern. Aber um standesgemäss zu übernachten, musste die noble Kundschaft bisher den Weg nach Lausanne oder Genf zurücklegen.`
  const imgInfo1 =
    'Charakteristisch für das Hôtel des Horlogers ist die avantgardistische, zickzackförmige Architektur, die der Topografie des Vallée de Joux folgt.'

  return (
    <div className="flex flex-col items-center ">
      <div className="pt-28">BACK</div>
      <Image
        src={no_image_found}
        alt="Img"
        className="p-10 w-[45rem] max-md:w-[21rem]  max-sm:w-[14rem] h-[45rem] max-md:h-[21rem]  max-sm:h-[14rem]"
      />
      <div className="text-center flex flex-col items-center">
        <Text twClassName="text-[120px] max-md:text-[55px] w-[63rem] max-md:w-[41rem] max-sm:w-[335px]">
          {title}
        </Text>
        <Text
          capitalize={true}
          twClassName={
            'text-[34px] max-md:text-[22px] w-[53rem] max-md:w-[41rem] max-sm:w-[335px]'
          }
        >
          {subTitle}
        </Text>
        <div className="p-10 flex gap-10 items-center">
          <Text>{author}</Text>
          <Text>{date}</Text>
          <div className="max-sm:hidden">
            <Button primaryBtn={true} bgColor={'#000000'} width={120}>
              concious
            </Button>
          </div>
        </div>
        <div className="sm:hidden">
          <Button primaryBtn={true} bgColor={'#000000'} width={120}>
            concious
          </Button>
        </div>
      </div>
      <div className="lg:container pt-10">
        <Detail content={content1} cardDescription={imgInfo1} size={'small'} />
        <Text twClassName={'pt-10 pb-10 text-[24px]'}>
          Die Unvergänglichkeit
        </Text>
        <Detail
          content={content2}
          cardTitle={'SILVIA AFFOLTER'}
          cardDescription={imgInfo1}
          size={'large'}
        />
      </div>
      <div className="p-20 max-md:p-5 self-start max-md:self-center">
        <div className="bg-[#EAEAEA] rounded-lg p-10 flex flex-col gap-5 w-[750px] max-md:w-[508px] max-sm:w-[335px]">
          <Text>www.hoteldeshorlogers.com, DZ ab CHF 370</Text>
          <Button primaryBtn={true} bgColor={'#000000'} width={200}>
            ZUR HOTEL WEBSITE
          </Button>
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

export default StoryDetail
