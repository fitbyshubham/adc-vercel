import { getHomeFilters } from "../utils/filters"

const useParentPage = (path, menuItems, lang) => {
  if (path === `/${lang}`) return { name: "Start", path: `/` }

  const id = path.split("/")[2]
  if (id === `news-and-events`)
    return { name: "News and Events", path: `/${lang}/${id}` }

  const dataIndex = getHomeFilters(menuItems, lang)
    .map((page) => page.id)
    .indexOf(id)

  if (dataIndex === -1) return { name: "Not Found", path: "/" }
  return {
    name: getHomeFilters(menuItems, lang)[dataIndex].text,
    path: `/${lang}/${id}`,
  }
}

export default useParentPage
