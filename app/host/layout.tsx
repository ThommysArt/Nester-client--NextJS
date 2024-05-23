import type { Metadata } from "next";
import { NavBar } from "@/components/nav-bar";
import { EdgeStoreProvider } from "@/lib/edgestore";

export const metadata: Metadata = {
    title: "Nester | Host",
    description: "Rent your house, rooms, hotels and more in a just a few clicks.",
  };

export default function HostLayout({
  children,
  }: Readonly<{
  children: React.ReactNode;
  }>) {
  return (
    <div className="flex flex-col gap-8">
    <div>
      <NavBar mode="host"/>
    </div>
    <div className="my-20 px-4 lg:px-20">
      <EdgeStoreProvider>{children}</EdgeStoreProvider>
    </div>
  </div>
  );
}