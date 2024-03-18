import Api from "@/api"
import Loading from "@/components/Loading"
import Text from "@/components/Text"
import { PlayIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"

const Ranking = ({ type, lang }) => {
  const isOwnPage = type === "ranking"
  const [rankings, setRankings] = useState(null)

  const fetchRankings = () => {
    Api.getRankings({ lang })
      .then((res) => {
        setRankings(res.data)
      })
      .catch(console.log)
  }

  useEffect(() => {
    if (isOwnPage) fetchRankings()
  }, [])

  if (!isOwnPage) return null

  if (!rankings) return <Loading size="lg" center />
  return (
    <div className="flex flex-col md:gap-y-[100px] gap-y-[20px] md:pt-[100px]">
      <div className="xl:w-[1011px] w-full mx-auto md:p-8 p-5 flex flex-col md:gap-y-20 gap-y-[40px]">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-xl">Gewichtetes Ranking</h3>
          <div className="w-full overflow-scroll">
            <table className="w-full">
              <thead>
                <tr>
                  <td className="px-4 py-2 min-w-[150px]">Einsender</td>
                  <td className="px-4 py-2 min-w-[150px]">Grand Prix</td>
                  <td className="px-4 py-2 min-w-[150px]">Evergreen</td>
                  <td className="px-4 py-2 min-w-[150px]">Gold</td>
                  <td className="px-4 py-2 min-w-[150px]">Silber</td>
                  <td className="px-4 py-2 min-w-[150px]">Bronze</td>
                  <td className="px-4 py-2 min-w-[150px]">Shortlist</td>
                </tr>
              </thead>
              <tbody>
                {rankings.map(({ attributes, id }) => (
                  <tr key={id}>
                    <td className="font-extralight px-4 py-2">
                      {attributes?.submitter}
                    </td>
                    <td className="font-extralight px-4 py-2">
                      {attributes?.grandPrix}
                    </td>
                    <td className="font-extralight px-4 py-2">
                      {attributes?.evergreen}
                    </td>
                    <td className="font-extralight px-4 py-2">
                      {attributes.gold}
                    </td>
                    <td className="font-extralight px-4 py-2">
                      {attributes.silber}
                    </td>
                    <td className="font-extralight px-4 py-2">
                      {attributes.bronze}
                    </td>
                    <td className="font-extralight px-4 py-2">
                      {attributes.shortlist}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="self-center flex gap-x-2 items-center">
            <PlayIcon className="w-4 h-4 rotate-90 text-blue-400" />
            <p className="font-bold text-blue-400">Mehr</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Ranking
