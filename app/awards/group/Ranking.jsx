import Text from "@/components/Text"
import { PlayIcon } from "@heroicons/react/24/solid"

const Ranking = ({ type }) => {
  if (type !== "ranking") return null

  return (
    <div className="flex flex-col gap-y-[100px] pt-[100px]">
      <Text twClassName="text-[120px] max-md:text-[55px] max-sm:text-[30px] leading-[120px] ml-[102px]">
        winners
      </Text>
      <div className="xl:w-[1011px] w-full mx-auto p-8 flex flex-col gap-y-20">
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
                {Array(10)
                  .fill(0)
                  .map((el, idx) => (
                    <tr key={idx}>
                      {["Ruf lanz Ag", 0, 1, 1, 3, 8, 10].map((score, idx) => (
                        <td className="font-extralight px-4 py-2" key={idx}>
                          {score}
                        </td>
                      ))}
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
        <div className="flex flex-col gap-y-4 mb-[200px]">
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
                {Array(10)
                  .fill(0)
                  .map((el, idx) => (
                    <tr key={idx}>
                      {["Ruf lanz Ag", 0, 1, 1, 3, 8, 10].map((score, idx) => (
                        <td className="font-extralight px-4 py-2" key={idx}>
                          {score}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ranking
