import db from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest, {params}: {params: {listingId: number}}) {
    try {
        const prisma = db()
        const bookings = prisma.booking.findMany({
            where: {
                listingId: params.listingId
            }
        })
        if (!bookings) {
            return new NextResponse("No booking found", {status:404})
        }
        return NextResponse.json(bookings)
    } catch (error) {
        console.log("[BOOKING | GET")
        return new NextResponse("Internal Server Error",{status:500})
    }
}

export async function POST (req: NextRequest, {params}: {params: {userId: string, listingId: number}}) {
    try {
        const prisma = db()
        const values = await req.json()
        const bookings = prisma.booking.create({
            data: {
                listingId: params.listingId,
                userId: params.userId,
                ...values
            }
        })
        if (!bookings) {
            return new NextResponse("Bad Request", {status:400})
        }
        return NextResponse.json(bookings)
    } catch (error) {
        console.log("[BOOKING | GET")
        return new NextResponse("Internal Server Error",{status:500})
    }
}