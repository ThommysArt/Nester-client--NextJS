import { Button } from "@/components/ui/button";
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
import RedirectCreate from "@/app/host/_components/redirect-create";
import { getAllListings } from "@/actions/listings";
import { useAuth } from "@clerk/nextjs";

export default function Page() {

  return (
    <>
      <Tabs defaultValue="dashboard">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="listings">Listings</TabsTrigger>
        </TabsList>

        {/*Dashboard Tab*/}
        <TabsContent value="dashboard">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>View your monthly success from your listings.</CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
          </Card>
        </TabsContent>

        {/*Listings Tab*/}
        <TabsContent value="listings">
          <Card>
            <CardHeader>
              <CardTitle>Listings</CardTitle>
              <CardDescription>Create, View and Edit all your listings here.</CardDescription>
            </CardHeader>
            <CardContent>
              
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <RedirectCreate />
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
