import type { Metadata } from "next";

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
      <>{children}</>
  );
}