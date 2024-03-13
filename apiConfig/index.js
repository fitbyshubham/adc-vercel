const config = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  IMAGE_API_URL: process.env.NEXT_PUBLIC_IMAGE_API_URL,
  token: process.env.NEXT_PUBLIC_API_TOKEN,
  HOMEPAGE: {
    BASE: "/start",
  },
  PEOPLE: {
    BASE: "/adc-people",
  },
  NEWS_AND_EVENTS: {
    BASE: "/news-events",
  },
  ARTICLES: {
    BASE: "/articles",
  },
  MENU: {
    BASE: "/menu",
  },
  FOOTER: {
    BASE: "/footer",
  },
  INSIGHTS: {
    BASE: "/insights",
  },
  LEARNINGS: {
    BASE: "/learnings",
  },
  CREATIVE_DAYS: {
    BASE: "/creative-days",
  },
  CREATIVE_DAYS_PAGE: {
    BASE: "creative-days-page",
  },
  AWARDS_PAGE: {
    BASE: "/awards-page",
  },
}

export default config
