import { NextResponse } from "next/server";
import bcrypt  from 'bcrypt'
import db from "@/lib/PrismaClientProvider";


export async function POST(req) {
    const {name, email, password,adminCode} = await req.json()
    // try{
        if(!name || !email || !password){
            return NextResponse.json({
                error: "All input required"
            }, {status: 404})
        }
        const existingUser = await db.user.findFirst({
            where: {
                email: email
            }
        })
        if(existingUser){
            return NextResponse.json({
                error: "User already exist with this email"
            },{
                status: 404
            })
        }
        const HashPassword = await bcrypt.hash(password,10)
        const isAdmin = adminCode === process.env.Admin_Secret
        const user = await DB.user.create({
            data: {
                name,
                email,
                password: HashPassword,
                isAdmin: isAdmin
            }
        })
       
            return NextResponse.json({
                message: "Signup success",
                user: user
            })
        
    // }catch(error){
    //     return NextResponse.json({
    //         error: error
    //     })
    // }
    
}
export async function GET() {
    const user = await DB.user.findMany({})
    return NextResponse.json({
        user: user
    })
    
}