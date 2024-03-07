import Text from "@/app/components/Text"
import not_found from "@/assets/images/bildschirmfoto.png"
import down from "@/assets/icons/expend_down.png"
import Image from "next/image"
import ADCLogo from "@/app/components/ADCLogo"

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
    <div className="px-[200px] py-20">
      <div className="flex justify-between">
        <Text capitalize={true} style={{ fontSize: 24 }}>
          Winners
        </Text>
        <ADCLogo width={220} height={55} />
      </div>
      <div className="flex justify-between pt-16">
        <div>
          <div className="flex gap-10 items-center">
            <div>ADC Awards 2023</div>
            <Image src={down} alt="Winners" className="w-8 h-8" />
          </div>
          <div className="pt-10">
            {awardNames.map((award, i) => (
              <div key={i}>{award.text}</div>
            ))}
          </div>
        </div>
        <Image src={not_found} alt="Winners" className="w-[35rem] h-[40rem]" />
      </div>
    </div>
  )
}

export default Winners
