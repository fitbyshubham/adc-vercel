export const getHomeFilters = (menuItems) => {
  if (!menuItems) return []

  return [
    { id: "insights", text: menuItems?.page1Name, path: "/" },
    { id: "learning", text: menuItems?.page2Name, path: "/" },
    { id: "creative-days", text: menuItems?.page3Name, path: "/" },
    { id: "awards", text: menuItems?.page4Name, path: "/" },
    { id: "people", text: menuItems?.page5Name, path: "/" },
  ]
}
export const insightPageFilters = [
  { id: "all", text: "All", path: "/insights/category?type=" },
  { id: "sparks", text: "Sparks", path: "/insights/category?type=" },
  { id: "impulse", text: "Impulse", path: "/insights/category?type=" },
  {
    id: "conscious",
    text: "Conscious",
    path: "/insights/category?type=",
  },
  {
    id: "queens-and-kings",
    text: "Queens & Kings",
    path: "/insights/category?type=",
  },
  {
    id: "point-of-view",
    text: "Point of View",
    path: "/insights/category?type=",
  },
  { id: "picky", text: "Picky", path: "/insights/category?type=" },
]

export const learningFilters = [
  { id: "adc-school", text: "ADC school", path: "/learning/" },
  { id: "adc-forward", text: "ADC forward", path: "/learning/" },
  { id: "adc-morning", text: "ADC mentoring", path: "/learning/" },
  { id: "coffee-case", text: "coffee case", path: "/learning/" },
]

export const peoplePageFilters = [
  { id: "all", text: "All", path: "/people/" },
  { id: "youngsters", text: "Youngsters", path: "/people/" },
  { id: "newbies", text: "Newbies", path: "/people/" },
  { id: "jury-members", text: "Jury Members", path: "/people/" },
  { id: "board", text: "Board", path: "/people/" },
  { id: "legends", text: "Legends", path: "/people/" },
  { id: "friends", text: "Friends", path: "/people/" },
]

export const creativeDaysFilters = [
  { id: "program", text: "Program", path: "/creative-days/category?type=" },
  { id: "speakers", text: "Speakers", path: "/creative-days/category?type=" },
  { id: "tickets", text: "Tickets", path: "/creative-days/" },
  { id: "location", text: "Location", path: "/creative-days/" },
]

export const awardsFilters = [
  { id: "winners", text: "WINNERS", path: "/awards/group?type=" },
  { id: "ranking", text: "Ranking", path: "/awards/group?type=" },
  { id: "guidelines", text: "Guidelines", path: "/awards/" },
  {
    id: "young-creatives",
    text: "Young Creatives",
    path: "/awards/",
  },
  { id: "adc-europe", text: "ADC EUROPE", path: "/awards/" },
]
