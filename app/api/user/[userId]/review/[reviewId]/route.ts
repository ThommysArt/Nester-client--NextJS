import db from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest, {params}: {params: {reviewId: number}}) {
    try {
        const prisma = db()
        const reviews = prisma.review.findUnique({
            where: {id: params.reviewId}
        })
        if (!reviews){
            return new NextResponse("No reviews found", {status: 404})
        }
        return NextResponse.json(reviews)
    } catch (error) {
        console.log("[REVIEW | GET] ", error)
        return new NextResponse("Internal Server Error", {status:500})
    }
}

export async function PATCH (req: NextRequest, {params}: {params: {reviewId: number}}) {
    try {
        const prisma = db()
        const values = await req.json()
        const reviews = prisma.review.update({
            where: {id: params.reviewId},
            data: {
                ...values
            }
        })
        if (!reviews){
            return new NextResponse("No reviews found", {status: 404})
        }
        return NextResponse.json(reviews)
    } catch (error) {
        console.log("[REVIEW | PATCH] ", error)
        return new NextResponse("Internal Server Error", {status:500})
    }
}

export async function DELETE (req: NextRequest, {params}: {params: {reviewId: number}}) {
    try {
        const prisma = db()
        const reviews = prisma.review.delete({
            where: {id: params.reviewId}
        })
        if (!reviews){
            return new NextResponse("No reviews found", {status: 404})
        }
        return NextResponse.json(reviews)
    } catch (error) {
        console.log("[REVIEW | DELETE] ", error)
        return new NextResponse("Internal Server Error", {status:500})
    }
}