import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function page() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Create Listing</CardTitle>
            <CardDescription>Expand your business with a new Listing.</CardDescription>
        </CardHeader>
        <CardContent>
            <form className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label>Title</Label>
                        <Input
                            type="text"
                            placeholder="West Coast Jabari"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label>Price</Label>
                        <Input
                            type="number"
                            placeholder="15000"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label>Country</Label>
                        <Input
                            type="text"
                            placeholder="Cameroon"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label>Location</Label>
                        <Input
                            type="text"
                            placeholder="Kribi"
                        />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter>
            <Button>Submit</Button>
        </CardFooter>
    </Card>
  )
}
