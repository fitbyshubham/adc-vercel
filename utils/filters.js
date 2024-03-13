export const getHomeFilters = (menuItems, lang) => {
  if (!menuItems) return []

  return [
    { id: "insights", text: menuItems?.page1Name, path: `/${lang}/` },
    { id: "learning", text: menuItems?.page2Name, path: `/${lang}/` },
    { id: "creative-days", text: menuItems?.page3Name, path: `/${lang}/` },
    { id: "awards", text: menuItems?.page4Name, path: `/${lang}/` },
    { id: "people", text: menuItems?.page5Name, path: `/${lang}/` },
  ]
}

export const insightPageFilters = (lang) => [
  { id: "all", text: "All", path: `/${lang}/insights/category?type=` },
  { id: "sparks", text: "Sparks", path: `/${lang}/insights/category?type=` },
  { id: "impulse", text: "Impulse", path: `/${lang}/insights/category?type=` },
  {
    id: "conscious",
    text: "Conscious",
    path: `/${lang}/insights/category?type=`,
  },
  {
    id: "queens-and-kings",
    text: "Queens & Kings",
    path: `/${lang}/insights/category?type=`,
  },
  {
    id: "point-of-view",
    text: "Point of View",
    path: `/${lang}/insights/category?type=`,
  },
  { id: "picky", text: "Picky", path: `/${lang}/insights/category?type=` },
]

export const learningFilters = (lang) => [
  { id: "adc-school", text: "ADC school", path: `/${lang}/learning/` },
  { id: "adc-forward", text: "ADC forward", path: `/${lang}/learning/` },
  { id: "adc-morning", text: "ADC mentoring", path: `/${lang}/learning/` },
  { id: "coffee-case", text: "coffee case", path: `/${lang}/learning/` },
]

export const peoplePageFilters = (lang) => [
  { id: "all", text: "All", path: `/${lang}/people/` },
  { id: "youngsters", text: "Youngsters", path: `/${lang}/people/` },
  { id: "newbies", text: "Newbies", path: `/${lang}/people/` },
  { id: "jury-members", text: "Jury Members", path: `/${lang}/people/` },
  { id: "board", text: "Board", path: `/${lang}/people/` },
  { id: "legends", text: "Legends", path: `/${lang}/people/` },
  { id: "friends", text: "Friends", path: `/${lang}/people/` },
]

export const creativeDaysFilters = (lang) => [
  {
    id: "program",
    text: "Program",
    path: `/${lang}/creative-days/category?type=`,
  },
  {
    id: "speakers",
    text: "Speakers",
    path: `/${lang}/creative-days/category?type=`,
  },
  { id: "tickets", text: "Tickets", path: `/${lang}/creative-days/` },
  { id: "location", text: "Location", path: `/${lang}/creative-days/` },
]

export const awardsFilters = (lang) => [
  { id: "winners", text: "WINNERS", path: `/${lang}/awards/group?type=` },
  { id: "ranking", text: "Ranking", path: `/${lang}/awards/group?type=` },
  { id: "guidelines", text: "Guidelines", path: `/${lang}/awards/` },
  {
    id: "young-creatives",
    text: "Young Creatives",
    path: `/${lang}/awards/`,
  },
  { id: "adc-europe", text: "ADC EUROPE", path: `/${lang}/awards/` },
]
