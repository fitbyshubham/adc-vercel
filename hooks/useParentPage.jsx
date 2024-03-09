import { homeFilters } from "../utils/filters"

const useParentPage = (path) => {
  if (path === "/") return { name: "Start", path: "/" }

  const id = path.split("/")[1]
  const dataIndex = homeFilters.map((page) => page.id).indexOf(id)

  if (dataIndex === -1) return { name: "Not Found", path: "/" }
  return { name: homeFilters[dataIndex].text, path: "/" + id }
}

export default useParentPage
