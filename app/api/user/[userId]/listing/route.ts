import db from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest, {params}: {params: {userId: string}}) {
    try {
        const prisma = db()
        const listings = prisma.listing.findMany({
            where: {userId: params.userId}
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

export async function POST (req: NextRequest, {params}: {params: {userId: string}}) {
    try {
        const prisma = db()
        const values = await req.json()
        const listings = prisma.listing.create({
            data: {
                userId: params.userId,
                ...values
            }
        })
        if (!listings){
            return new NextResponse("Bad Request", {status: 400})
        }
        return NextResponse.json(listings)
    } catch (error) {
        console.log("[LISTINGS | POST] ", error)
        return new NextResponse("Internal Server Error", {status:500})
    }
}