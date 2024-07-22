import db from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest, {params}: {params: {listingId: number}}) {
    try {
        const prisma = db()
        const reviews = prisma.review.findMany({
            where: {
                listingId: params.listingId
            }
        })
        if (!reviews) {
            return new NextResponse("No review found", {status:404})
        }
        return NextResponse.json(reviews)
    } catch (error) {
        console.log("[REVIEW | GET")
        return new NextResponse("Internal Server Error",{status:500})
    }
}

export async function POST (req: NextRequest, {params}: {params: {userId: string, listingId: number}}) {
    try {
        const prisma = db()
        const values = await req.json()
        const reviews = prisma.review.create({
            data: {
                listingId: params.listingId,
                userId: params.userId,
                ...values
            }
        })
        if (!reviews) {
            return new NextResponse("Bad Request", {status:400})
        }
        return NextResponse.json(reviews)
    } catch (error) {
        console.log("[REVIEW | GET")
        return new NextResponse("Internal Server Error",{status:500})
    }
}