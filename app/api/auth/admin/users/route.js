import prisma from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server";

export async function GET(req) {
    try{
        const users = await prisma.user.findMany({
            select:{
                name: true,
                email: true,
                role: true
            }
        })
        return NextResponse.json({
            users: users
        })
    }catch(error){
        return NextResponse.json({
            error:error
        },{status:400})
    }
    
}