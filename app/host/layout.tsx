import type { Metadata } from "next";
import { NavBar } from "@/components/nav-bar";
import { auth } from "@/auth";
import { toast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Nester | Host",
    description: "Rent your house, rooms, hotels and more in a just a few clicks.",
  };

export default async function HostLayout({
  children,
  }: Readonly<{
  children: React.ReactNode;
  }>) {
    const session = await auth()
    if(!session?.user) {
      toast({
        title: "Unauthorized",
        description: "You must be logged in to access this page.",
        variant: "destructive"
      })
      redirect("/auth/sign-in")
    }
  return (
    <div className="flex flex-col gap-8">
      <div>
        <NavBar mode="host"/>
      </div>
      <div className="my-20 px-4 lg:px-20">
        {children}
      </div>
    </div>
  );
}