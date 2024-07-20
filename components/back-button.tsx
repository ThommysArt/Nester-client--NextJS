"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon } from "@radix-ui/react-icons"

const BackButton = () => {
    const router = useRouter()

    return (
        <Button variant="outline" size="icon" onClick={() => router.back()}><ChevronLeftIcon /></Button>
    )
}

export { BackButton }