import prisma from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server";


export async function DELETE(req, { params }) {
    const { id } = await params;
    console.log(id)
    try {
        const user = await prisma.user.delete({
            where: {
                id: parseInt(id)
            }
        })
        if (user) {
            return NextResponse.json({
                message: "User deleted",
                user: user
            })
        }
        return NextResponse.json({
            error: "User deletion failed"
        })
    } catch (error) {
        return NextResponse.json({
            error: error.meta.cause
        }, { status: 400 })
    }

}