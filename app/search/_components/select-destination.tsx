"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

import { LOCATIONS_LIST } from "@/constants/locations"
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectValue,
  SelectTrigger,
  SelectLabel
} from "@/components/ui/select"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

interface SelectLocationProps {
    onChange: (e: string) => void
}

const SelectDestination: React.FC<SelectLocationProps> = ({onChange}) => {
  const [value, setValue] = React.useState("Select destination...")

  return (
    <>
      <Select onValueChange={(v)=> {
        setValue(v)
        onChange(v)
      }}>
        <SelectTrigger>
        <SelectValue placeholder="Select destination..." />
        </SelectTrigger>
        <SelectContent className="h-[280px]">
          {Object.entries(LOCATIONS_LIST).map(([country, locations]) => (
            <SelectGroup>
              <SelectLabel>{country}</SelectLabel>
              <SelectSeparator />
              {locations.map((location) => (
                <SelectItem value={location}>
                  {location}
                </SelectItem>
              ))}
              <SelectSeparator />
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}


export {SelectDestination};