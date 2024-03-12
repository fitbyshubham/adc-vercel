"use client"
import EmptyPage from "@/components/EmptyPage"
import { useParams } from "next/navigation"
import React from "react"

const Page = () => {
  const params = useParams()
  return (
    <div className="pt-36">
      <EmptyPage title={params.filter} />
    </div>
  )
}

export default Page
