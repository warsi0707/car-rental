import { DB } from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server";


export async function DELETE(req, { params }) {
    const { id } = await params;
    try {
        const user = await DB.user.delete({
            where: {
                id: parseInt(id)
            }
        })
        if (user) {
            return NextResponse.json({
                message: "User deleted"
            })
        }
        return NextResponse.json({
            error: "User deletion failed"
        },{status:400})
    } catch (error) {
        return NextResponse.json({
            error: error.meta.cause
        }, { status: 400 })
    }

}