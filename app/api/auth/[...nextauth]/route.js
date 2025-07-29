import { DB } from "@/lib/PrismaClientProvider"
import NextAuth from "next-auth"
import bcrypt from 'bcrypt'
import CredentialsProvider from "next-auth/providers/credentials";

const AuthOption = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try{
                    const user = await DB.user.findFirst({
                        where: {
                            email: credentials.email
                        }
                    })
                         console.log(user)
                    if(!user){
                        return null
                    }
                    const comparePassword = await bcrypt.compare(credentials.password, user.password)
                    if(!comparePassword){
                        return null
                    }
                    return user
               

                }catch(error){
                    return null
                }
            }
        })
    ],
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    callbacks : {
        async jwt({token, user}){
            console.log("token", token)
            console.log("user", user)
            if(user){
                token.id = user.id,
                token.name = user.name
                token.email = user.email
                token.isAdmin = user.isAdmin
            }
            return token
        },
        async session({session, token}){
            console.log("session", session)
            if(token){
                 session.user.id = token.id,
                session.user.email =token.email,
                session.user.name = token.name
                session.user.isAdmin = token.isAdmin
            }
            return session
        }
    }
})

const handler = AuthOption
export { handler as GET, handler as POST }