"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { ListingImageForm } from "@/app/host/create/_components/listing-image-form"
import { ListingAmenitiesForm, type Amenity } from "@/app/host/create/_components/listing-amenities-form"


export default function Page () {
    const [images, setImages] = useState<string[] | null>()
    const [amenities, setAmenities] = useState<Amenity[]>()
    
    return (
        <Tabs defaultValue="listing">
            <TabsList>
                <TabsTrigger value="listing">Listing</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="images">Images</TabsTrigger>
            </TabsList>
            
            {/*Listing Tab*/}
            <TabsContent value="listing">
                <Card>
                    <CardHeader>
                        <CardTitle>Listing</CardTitle>
                        <CardDescription>Add your listing details</CardDescription>
                    </CardHeader>
                    <CardContent>
                        
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2">
                        <Button>Save Changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>

            {/*Amenities Tab*/}
            <TabsContent value="amenities">
                <ListingAmenitiesForm setValues={setAmenities} />
            </TabsContent>

            {/*Images Tab*/}
            <TabsContent value="images">
                <ListingImageForm setImages={setImages} />
            </TabsContent>
        </Tabs>
    )
}