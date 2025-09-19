import { DB } from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server";

export async function GET(req) {
    try{
        const users = await DB.user.findMany({
            where: {
                role: 'user'
            },
            select:{
                name: true,
                email: true,
                role: true,
                id: true
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