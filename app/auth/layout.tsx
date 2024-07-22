import type { Metadata } from "next";
import { NavBar } from "@/components/nav-bar";

export const metadata: Metadata = {
    title: "Nester | Auth",
    description: "Rent your house, rooms, hotels and more in a just a few clicks.",
  };

export default function AuthLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <NavBar mode="auth"/>
            </div>
            <div className="my-20 px-4 lg:px-20">
                {children}
            </div>
        </div>
    );
}