import db from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest, {params}: {params: {bookingId: number}}) {
    try {
        const prisma = db()
        const bookings = prisma.booking.findUnique({
            where: {id: params.bookingId}
        })
        if (!bookings){
            return new NextResponse("No bookings found", {status: 404})
        }
        return NextResponse.json(bookings)
    } catch (error) {
        console.log("[BOOKINGS | GET] ", error)
        return new NextResponse("Internal Server Error", {status:500})
    }
}

export async function PATCH (req: NextRequest, {params}: {params: {bookingId: number}}) {
    try {
        const prisma = db()
        const values = await req.json()
        const bookings = prisma.booking.update({
            where: {id: params.bookingId},
            data: {
                ...values
            }
        })
        if (!bookings){
            return new NextResponse("No bookings found", {status: 404})
        }
        return NextResponse.json(bookings)
    } catch (error) {
        console.log("[BOOKINGS | PATCH] ", error)
        return new NextResponse("Internal Server Error", {status:500})
    }
}

export async function DELETE (req: NextRequest, {params}: {params: {bookingId: number}}) {
    try {
        const prisma = db()
        const bookings = prisma.booking.delete({
            where: {id: params.bookingId}
        })
        if (!bookings){
            return new NextResponse("No bookings found", {status: 404})
        }
        return NextResponse.json(bookings)
    } catch (error) {
        console.log("[bookingS | DELETE] ", error)
        return new NextResponse("Internal Server Error", {status:500})
    }
}