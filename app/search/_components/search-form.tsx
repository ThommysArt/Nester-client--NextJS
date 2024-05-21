"use client"

import { useState } from "react";
import { DateRange } from "react-day-picker";
import { DateRangePicker } from "./date-range-picker";
import { addDays } from "date-fns"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../../../components/ui/card";
import { Label } from "@/components/ui/label";
import { SelectDestination } from "@/app/search/_components/select-destination";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon, MinusIcon, PlusIcon, ArrowLeftIcon } from "@radix-ui/react-icons";

const SearchForm = () => {
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
      })
    const [people, setPeople] = useState<number>(0)
    const [destination, setDestination] = useState<string>("")

    const router = useRouter()

    return (
        <div className="flex w-full justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>Search Housing</CardTitle>
                    <CardDescription>
                        Looking for your next travel home, We will help you find it.
                    </CardDescription>
                </CardHeader>
                <CardContent className="w-full px-4 lg:px-8 py-4 lg:py-8">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <Label>Destination</Label>
                            <SelectDestination onChange={setDestination} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Check Dates</Label>
                            <DateRangePicker onDateChange={setDate} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>People</Label>
                            {/*<Input type="number" onChange={(e)=>setPeople(+e.target.value)} />*/}
                            <div className="grid grid-cols-8 p-2 border rounded-lg">
                                <Button size="icon" variant="outline" className="rounded-full" onClick={()=> {if(people>0){setPeople(people-1)}}}>
                                    <MinusIcon />
                                </Button>
                                <input className="reset col-span-6 bg-transparent text-center" value={people} disabled/>
                                <Button size="icon" variant="outline" className="rounded-full" onClick={()=> {if(people<16){setPeople(people+1)}}}>
                                    <PlusIcon />
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" className="flex flex-row gap-1" onClick={()=> router.push("/")}><ArrowLeftIcon />Cancel</Button>
                    <Button className="flex flex-row gap-1">Search<MagnifyingGlassIcon /></Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export {SearchForm};