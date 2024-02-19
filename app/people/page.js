import Filters from '../components/Filters'
import Search from '../components/Search'

const People = () => {
  const filters = [
    'All',
    'Youngsters',
    'Jury Members',
    'Board',
    'Legends',
    'Friends',
    'Board',
    'Legends',
    'Friends',
  ]

  return (
    <div className="pt-20 flex flex-col items-center">
      <Filters filters={filters} />
      <div className="p-20">
        <Search />
      </div>
      <div className="text-center text-[55px] pb-10">
        <div>Marietta Albinus</div>
        <div>Lena Altorfe</div>
        <div>Martina Anderberg</div>
        <div>Marcel Benz</div>
        <div>Rainer Bühle</div>
        <div>Petra Dreyfu</div>
        <div>Tino Elsene</div>
        <div>Roman Emund</div>
        <div>Martin Frank</div>
        <div>Kathrin Hasenböhler Viollie</div>
        <div>Valerie Hefermehl</div>
        <div>Kathleen Heimst Grimstad</div>
        <div>Isabelle Hettel</div>
        <div>Nicolas Hostettle</div>
        <div>Pam Hügli</div>
        <div>Susan Isko</div>
        <div>Markus Kammermann</div>
        <div>Saskia Kathmann</div>
      </div>
    </div>
  )
}

export default People
