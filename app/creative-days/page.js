import Card from "../components/Card"
import Filters from "../components/Filters"
import Impressionen from "../components/Impressionen"
import Info from "../components/Info"
import Marquee from "../components/Marquee"
import MarqueeChildren from "../components/MarqueeChildren"
import "../style.css"
import { creativeDaysFilters as filters } from "../utils/filters"

const CreativeDays = () => {
  const des = [
    "Die Creative Days sind zurück. Mit einer klaren Strategie: Ganz im Zeichen von Kreativität und Women’s Empowerment. Vom 8. bis 10. Juni 2023 präsentiert der ADC Switzerland während drei Tagen kreative Highlights. Im Schloss Sihlberg in Zürich treten hochkarätige, nationale und internationale Referentinnen und Referenten auf und laden zu Workshops, Keynote-Speeches und Diskurs ein.",
    "Ihren krönenden Abschluss finden die Creative Days 23 am Samstag mit der ADC Award Ceremony mit anschliessendem Dinner und Party bis tief in die Nacht.",
    "Mit dem Creative Days 3-Tages-Pass für CHF 195.– erhälts du Zugang zum Schloss Sihlberg mit allen Keynote-Speeches und Workshops sowie der ADC Award Ceremony inkl. Dinner und Party.",
  ]

  return (
    <div>
      <div className="creative-gradient-background flex flex-col h-[90rem]">
        <Marquee speed={200} textSize={220} style={{ marginTop: 80 }}>
          <MarqueeChildren
            data={{ content: "Creative day 2024", visible: true }}
          />
        </Marquee>
        <div className="flex justify-center">
          <div className=" container mx-auto px-4 pt-10 pb-10">
            <div className="grid grid-cols-12 gap-4">
              <Card
                imageCard={false}
                title={"Location: Schloss Sihlberg"}
                width={230}
                buttonText={"ZU google maps"}
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
            title={"Creative Days 2024"}
            description={des}
            btnTitle={"Festivalpass bestellen"}
            btnWidth={220}
            primaryBtn={true}
            btnBgColor={"#000000"}
            componentStyle={{ background: "none" }}
          />
        </div>
        <Impressionen />
      </div>
    </div>
  )
}

export default CreativeDays
