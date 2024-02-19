import Card from '../components/Card'
import Filters from '../components/Filters'
import Impressionen from '../components/Impressionen'
import Info from '../components/Info'
import Marquee from '../components/Marquee'
import MarqueeChildren from '../components/MarqueeChildren'
import '../style.css'

const CreativeDays = () => {
  const filters = [
    'WINNERS',
    'Ranking',
    'Guidelines',
    'Young CreativeS',
    'ADC EUROPE',
  ]

  const des = `Die Call for Entries für die ADC Awards 2023 sind ab sofort eröffnet. Dieses Mal gibt es drei spannende Premieren: die Kategorien «Spatial Experience» und «Creative Effectiveness» sowie den Sonderpreis ADCESG Award. Einsendeschluss ist der NEU der 22. März 2023.
  Für die nächsten ADC Awards, die im Mai/Juni 2023 stattfinden, freut sich der ADC Switzerland auf Einsendungen. Unter anderem auch für die neu geschaffene Kategorie «Spatial Experience», die Einreichungen in den Bereichen «Events», «Exhibitions», «Public Space» und «Digital Space» umfasst. Damit können neu auch szenographische Ideen eingereicht werden, die Flächen bzw. Räume dreidimensional physisch und/oder digital bespielen.`
  return (
    <div>
      <div className="awards-gradient-background flex flex-col h-[90rem]">
        <Marquee speed={200} textSize={220} style={{ marginTop: 80 }}>
          <MarqueeChildren data={{ content: 'AWARD 2024', visible: true }} />
        </Marquee>
        <div className="flex justify-center">
          <div className=" container mx-auto px-4 pt-10 pb-10">
            <div className="grid grid-cols-12 gap-4">
              <Card
                imageCard={false}
                title={'Location: Schloss Sihlberg'}
                width={230}
                buttonText={'ZU google maps'}
                btnWidth={165}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Filters filters={filters} />
        <div className="pt-20 pb-20">
          <Info
            description={des}
            btnTitle={'Festivalpass bestellen'}
            btnWidth={220}
            primaryBtn={true}
            btnBgColor={'#000000'}
            componentStyle={{ background: 'none' }}
          />
        </div>
        <Impressionen />
      </div>
    </div>
  )
}

export default CreativeDays
