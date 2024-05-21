import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nester | Search",
    description: "Rent your house, rooms, hotels and more in a just a few clicks.",
  };

export default function SearchLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <>{children}</>
    );
}