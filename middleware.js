import createIntlMiddleware from "next-intl/middleware"
import {
  locales,
  localePrefix,
  defaultLocale,
  pathnames,
} from "./navigation.js"

export function middleware(request) {
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
    pathnames,
    localePrefix,
    alternateLinks: false,
    localeDetection: true,
  })
  const response = handleI18nRouting(request)

  // Step 3: Alter the response
  response.headers.set("x-default-locale", defaultLocale)

  return response
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en)/:path*"],
}
