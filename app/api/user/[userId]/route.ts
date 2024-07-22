import db from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest, {params}: {params: {userId: string}}) {
    try {
        const prisma = db()
        const values = await req.json()
        const user = prisma.user.create({
            data: {
                id: params.userId,
                ...values
            }
        })
        if (!user) {
            return new NextResponse("Bad Request", {status: 400})
        }
    } catch (error) {
        console.log("[USER | POST]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export async function GET (req: NextRequest, {params}: {params: {userId: string}}) {
    try {
        const prisma = db()
        const user = prisma.user.findUnique({
            where: {
                id: params.userId
            }
        })
        if (!user) {
            return new NextResponse("User Not found", {status: 404})
        }
        return NextResponse.json(user)
    } catch (error) {
        console.log("[USER | GET]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export async function PATCH (req: NextRequest, {params}: {params: {userId: string}}) {
    try {
        const prisma = db()
        const values = await req.json()
        const user = prisma.user.update({
            where: {
                id: params.userId
            },
            data: {
                ...values
            }
        })
        if (!user) {
            return new NextResponse("User Not found", {status: 404})
        }
        return NextResponse.json(user)
    } catch (error) {
        console.log("[USER | PATCH]", error)
        return new NextResponse("Internal Server Error", {status: 500})
    }
}

export async function DELETE (req: NextRequest, {params}: {params: {userId: string}}) {
    try {
        const prisma = db()
        const values = await req.json()
        const user = prisma.user.delete({
            where: {
                id: params.userId
            }
        })
        if (!user) {
            return new NextResponse("User Not found", {status: 404})
        }
        return NextResponse.json(user)
    } catch (error) {
        console.log("[USER | DELETE]", error)
        return new NextResponse("Internal Server Error", {status: 500})
    }
}
