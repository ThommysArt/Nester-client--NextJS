"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function RedirectCreate () {
    const router = useRouter()

    return (
        <Button onClick={()=> router.push("/host/create")}>Create</Button>
    )
}