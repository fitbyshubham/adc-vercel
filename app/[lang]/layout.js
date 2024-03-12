import { Inter } from "next/font/google"

import "./globals.css"

import ContextProvider from "../../context"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "ADC",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <Navbar />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  )
}