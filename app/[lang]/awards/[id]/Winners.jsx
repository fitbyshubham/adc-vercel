import Text from "@/components/Text"
import not_found from "@/assets/images/bildschirmfoto.png"
import down from "@/assets/icons/expend_down.png"
import Image from "next/image"
import ADCLogo from "@/components/ADCLogo"

const Winners = ({ type }) => {
  if (type !== "winners") return null

  const awardNames = [
    { text: "DIgital" },
    { text: "Film" },
    { text: "DIgital" },
    { text: "Film" },
    { text: "DIgital" },
    { text: "Film" },
    { text: "DIgital" },
    { text: "Film" },
    { text: "DIgital" },
    { text: "Film" },
    { text: "DIgital" },
    { text: "Film" },
    { text: "DIgital" },
    { text: "Film" },
    { text: "DIgital" },
    { text: "Film" },
  ]

  return (
    <div className="xl:px-[200px] lg:px-[50px] px-[20px] py-20">
      <div className="flex justify-between">
        <Text capitalize={true} style={{ fontSize: 24 }}>
          Winners
        </Text>
        <ADCLogo width={220} height={55} />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:items-start items-center justify-between pt-16">
        <div className="flex-col flex gap-10 min-w-[250px]">
          <div className="flex gap-10 items-center">
            <p>ADC Awards 2023</p>
            <Image src={down} alt="Winners" className="w-8 h-8" />
          </div>
          <div>
            {awardNames.map((award, i) => (
              <p key={i}>{award.text}</p>
            ))}
          </div>
        </div>
        <Image
          src={not_found}
          alt="Winners"
          className="max-w-[650px] w-full h-auto"
        />
      </div>
    </div>
  )
}

export default Winners
