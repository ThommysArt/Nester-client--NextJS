import db from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest, {params}: {params: {listingId: number}}) {
    try {
        const prisma = db()
        const listings = prisma.listing.findUnique({
            where: {id: params.listingId}
        })
        if (!listings){
            return new NextResponse("No listings found", {status: 404})
        }
        return NextResponse.json(listings)
    } catch (error) {
        console.log("[LISTINGS | GET] ", error)
        return new NextResponse("Internal Server Error", {status:500})
    }
}

export async function PATCH (req: NextRequest, {params}: {params: {listingId: number}}) {
    try {
        const prisma = db()
        const values = await req.json()
        const listings = prisma.listing.update({
            where: {id: params.listingId},
            data: {
                ...values
            }
        })
        if (!listings){
            return new NextResponse("No listings found", {status: 404})
        }
        return NextResponse.json(listings)
    } catch (error) {
        console.log("[LISTINGS | PATCH] ", error)
        return new NextResponse("Internal Server Error", {status:500})
    }
}

export async function DELETE (req: NextRequest, {params}: {params: {listingId: number}}) {
    try {
        const prisma = db()
        const listings = prisma.listing.delete({
            where: {id: params.listingId}
        })
        if (!listings){
            return new NextResponse("No listings found", {status: 404})
        }
        return NextResponse.json(listings)
    } catch (error) {
        console.log("[LISTINGS | DELETE] ", error)
        return new NextResponse("Internal Server Error", {status:500})
    }
}