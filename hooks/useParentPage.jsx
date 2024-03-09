import { getHomeFilters } from "../utils/filters"

const useParentPage = (path, menuItems) => {
  if (path === "/") return { name: "Start", path: "/" }

  const id = path.split("/")[1]
  const dataIndex = getHomeFilters(menuItems)
    .map((page) => page.id)
    .indexOf(id)

  if (dataIndex === -1) return { name: "Not Found", path: "/" }
  return { name: getHomeFilters(menuItems)[dataIndex].text, path: "/" + id }
}

export default useParentPage
