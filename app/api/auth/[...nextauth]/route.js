import { DB } from "@/lib/PrismaClientProvider"
import NextAuth from "next-auth"
import bcrypt from 'bcrypt'
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


const AuthOption = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try {
                    if (!credentials.email || !credentials.password) {
                        throw new error("All input required")
                    }
                    const user = await DB.user.findFirst({
                        where: {
                            email: credentials.email
                        }
                    })
                    if (!user) {
                        return null
                    }
                    const comparePassword = await bcrypt.compare(credentials.password, user.password)
                    if (!comparePassword) {
                        return null
                    }
                    return user


                } catch (error) {
                    return null
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: '/signin'
    },
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id,
                    token.name = user.name
                token.email = user.email
                token.isAdmin = user.isAdmin
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id,
                    session.user.email = token.email,
                    session.user.name = token.name
                session.user.isAdmin = token.isAdmin
            }
            return session
        },
        // async signIn({account, profile}){
        //     if(account.provider === 'google'){
        //          return profile.email_verifird && profile.email.endsWith("@gmail.com")
                 
        //     }
        //     return true
        // }
    }
})

const handler = AuthOption
export { handler as GET, handler as POST }