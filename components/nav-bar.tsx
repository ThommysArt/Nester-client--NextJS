import React from 'react'
import Image from 'next/image'
import { ModeToggle } from '@/components/theme-button'

import { Separator } from '@/components/ui/separator'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { SearchTrigger } from '@/components/search-trigger'
import { BackButton } from '@/components/back-button'



interface NavBarProps {
    mode: "default" | "host" | "home" | "search" | "auth"
}
  
const NavBar: React.FC<NavBarProps> = async ({mode}) => {

    return (
        <div className="flex flex-col">
            <div className="flex gap-4 lg:gap-8 fixed w-full h-18 py-4 px-4 lg:px-8 m-0 z-10 backdrop-filter backdrop-blur-md justify-between shadow-lg">
                <div className="flex gap-4 justify-center items-center">
                    <div className="flex flex-row gap-2 items-center">
                        <div className="flex w-10 items-center">
                            <AspectRatio ratio={1/1}>
                                <Image src="/Nester1.svg" alt="airbnb" className="object-cover rounded" fill />
                            </AspectRatio>
                        </div>
                        <h1 className="scroll-m-20 text-md font-bold tracking-tight lg:text-2xl">
                            nester
                        </h1>
                    </div>
                </div>
                <div className="flex flex-row gap-2 lg:gap-5">
                    {mode==="auth"?(<></>):(<BackButton />)}
                    {mode==="search"||"host"||"auth"?(<></>):(<SearchTrigger />)}
                    <ModeToggle />
                </div> 
            </div>
            <Separator />
        </div>
    )
}

export {NavBar};