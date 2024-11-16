import { prismaClient } from "@/app/lib/db";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID || "",
            clientSecret : process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    secret : process.env.NEXTAUTH_SECRET ?? "secret",
    callbacks:{
        async session({ session, token, user }) {
            const dbuser = await prismaClient.user.findUnique({
                where:{
                    email : session.user?.email as string
                }
            })
            if(!dbuser)
            {
                return session;
            }
            return{
                ...session,
                user:{
                    id : dbuser.id,
                    email : dbuser.email
                  
                }
            }
          },

        async signIn(params){

            if(!params.user.email)
            {
                return false;
            }
            try {
                await prismaClient.user.create({
                    data:{
                        email : params.user.email,
                        provider : "Google"
                    }
                })
            } catch (error) {
                return false
            }
            return true
        },
    }
})
export { handler as GET, handler as POST }
// export const  GET = handler;
// export const  POST = handler;
