import { createLocalizedPathnamesNavigation } from "next-intl/navigation"

export const locales = ["en", "de"]
export const defaultLocale = "en"
export const localePrefix = "always" // Default

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  "/": "/",
}

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames, localePrefix })
