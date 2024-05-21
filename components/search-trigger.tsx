"use client"

import { Button } from "@/components/ui/button"

import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"

export function SearchTrigger() {
  const router = useRouter()

  return (
    <Button size="icon" onClick={()=> router.push("/search")}><MagnifyingGlassIcon /></Button>
  )
}
