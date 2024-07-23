"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MinusIcon } from "@radix-ui/react-icons"
import { Dispatch, useState } from "react";
import { SetStateAction } from "react";


interface ListingAmenitiesFormProps {
    setValues: Dispatch<SetStateAction<Amenity[] | undefined>>,
}

export type Amenity = {
    name: string,
    description: string
}

const ListingAmenitiesForm: React.FC<ListingAmenitiesFormProps> = ({setValues}) => {
    const [amenities, setAmenities] = useState<Amenity[]>([{name: "",description:""},])
    const [amenity, setAmenity] = useState<Amenity>({name: "",description:""})
    return (
        <Card>
            <CardHeader>
                <CardTitle>Amenities</CardTitle>
                <CardDescription>Add amenities to your listing</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-4">
                    <Card>
                        <CardContent>
                            {amenities?.map((am) =>(
                                <div className="flex flex-row">
                                    <Label>{am.name}</Label>
                                    <Button variant="outline" size="icon" className="rounded-full"><MinusIcon /></Button>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-8">
                            <div className="flex flex-col gap-2">
                                <Label>Name</Label>
                                <Input value={amenity.name} onChange={(e)=>{
                                    const am = {name: e.target.value, description: amenity.description}
                                    setAmenity(am)
                                }}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                            <Label>Description</Label>
                                <Textarea value={amenity.description} onChange={(e)=>{
                                    const am = {name: amenity.name, description: e.target.value}
                                    setAmenity(am)
                                }}
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-row justify-end">
                            <Button variant="secondary" onClick={()=>{
                                const ams: Amenity[] = amenities
                                ams?.push(amenity)
                                setAmenities(ams)
                                console.log(ams)
                            }}
                            >
                                Add
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                <Button>Save Changes</Button>
            </CardFooter>
        </Card>
        
    )
}

export {ListingAmenitiesForm};