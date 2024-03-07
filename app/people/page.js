"use client"
import Api from "../api"
import Button from "../components/Button"
import Filters from "../components/Filters"
import Loading from "../components/Loading"
import Search from "../components/Search"
import { useEffect, useState } from "react"
import Text from "../components/Text"
import { peoplePageFilters } from "../utils/filters"
import ViewDetails from "./ViewDetails"

const People = () => {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [text, setText] = useState("")
  const [people, setPeople] = useState(null)
  const [meta, setMeta] = useState({})
  const [expendDetail, setExpendDetail] = useState(null)

  const fetchPeopleData = (searchText, page, prevPeopleData = []) => {
    setLoading(true)
    Api.getPeoplePage(searchText, page, 10)
      .then((res) => {
        if (prevPeopleData) {
          setPeople([...prevPeopleData, ...res.data])
        } else setPeople(res.data)
        setMeta(res.meta)
        setLoading(false)
      })
      .catch(console.log)
  }

  useEffect(() => {
    fetchPeopleData("", 1)
  }, [])

  const handleSearch = (text) => {
    setPage(1)
    fetchPeopleData(text, 1)
  }

  const handleShowMore = () => {
    setPage(page + 1)
    fetchPeopleData(text, page + 1, people)
  }

  const handleExpend = (i) => {
    if (i === expendDetail) return setExpendDetail(null)
    setExpendDetail(i)
  }

  return (
    <div className="pt-32 flex flex-col items-center">
      <Filters filters={peoplePageFilters} />
      <div className="md:p-20 pb-10 pt-8">
        <Search text={text} setText={setText} handleSearch={handleSearch} />
      </div>
      <div className="text-center  pb-10 min-h-[20rem] flex flex-col justify-center items-center">
        {people &&
          people.map((item, i) => (
            <div
              key={item.id}
              onClick={() => handleExpend(i)}
              className="cursor-pointer"
            >
              <div className="text-[55px] max-md:text-[24px]">
                {item.attributes.name}
              </div>
              {expendDetail === i ? <ViewDetails /> : null}
            </div>
          ))}
        {people && people.length === 0 ? (
          <Text fontSize={18}>No result found!</Text>
        ) : (
          <div
            className={`p-5 ${
              meta?.pagination?.pageCount === page ? "hidden" : ""
            }`}
          >
            {loading ? (
              <Loading size="md" />
            ) : (
              <Button onButtonClick={handleShowMore} width={200}>
                <Text>weitere anzeigen</Text>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default People
