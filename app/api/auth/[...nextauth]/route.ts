import { prismaClient } from "@/app/lib/db";
import { create } from "domain";
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
    pages: {
        error: '/api/auth/error', // Custom error page
    },
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
            console.log("SignIn attempt:", params.user.email);
            
            if(!params.user.email) {
                console.log("No email provided");
                return false;
            }
            
            try {
                // First check if user already exists
                const existingUser = await prismaClient.user.findUnique({
                    where: {
                        email: params.user.email
                    }
                });

                if (existingUser) {
                    console.log("User already exists:", params.user.email);
                    return true;
                }

                // Create new user with default streams
                const newUser = await prismaClient.user.create({
                    data: {
                        email: params.user.email,
                        provider: "Google",
                        streams: {
                            create: [
                                {
                                    type: 'Youtube', 
                                    url: "https://www.youtube.com/watch?v=LK7-_dgAVQE&list=RDLK7-_dgAVQE&start_radio=1",
                                    extractedId: "rqt9y9EqyeQ",
                                    title: "Husan Tera Toba Toba (Official Video) Karan Aujla | Tauba Tauba |Vicky Kaushal,Tripti| New Song 2024",
                                    smallImg: "https://i.ytimg.com/vi/rqt9y9EqyeQ/maxresdefault.jpg",
                                    bigImg: "https://i.ytimg.com/vi/rqt9y9EqyeQ/maxresdefault.jpg",
                                    played: false,
                                    playedTs: new Date(),
                                    createAt: new Date(),
                                    active: true
                                },
                                {
                                    type: 'Youtube', 
                                    url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
                                    extractedId: "JGwWNGJdvx8",
                                    title: "Ed Sheeran - Shape of You (Official Music Video)",
                                    smallImg: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAs8aX0ACEG9PZWCbmZtwXgSkEzng",
                                    bigImg: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAs8aX0ACEG9PZWCbmZtwXgSkEzng",
                                    played: false,
                                    playedTs: new Date(),
                                    createAt: new Date(),
                                    active: true
                                },
                                {
                                    type: 'Youtube', 
                                    url: "https://www.youtube.com/watch?v=0pWsCiBvLOk",
                                    extractedId: "0pWsCiBvLOk",
                                    title: "Shubh - One Love (Official Audio)",
                                    smallImg: "https://i.ytimg.com/vi/0pWsCiBvLOk/maxresdefault.jpg",
                                    bigImg: "https://i.ytimg.com/vi/0pWsCiBvLOk/maxresdefault.jpg",
                                    played: false,
                                    playedTs: new Date(),
                                    createAt: new Date(),
                                    active: true
                                },
                            ]
                        }
                    }
                });

                console.log("New user created:", newUser.email);
                return true;

            } catch (error) {
                console.error("SignIn error:", error);
                // Even if database operation fails, allow sign in
                // This prevents the Access Denied error
                return true;
            }
        },
    }
    
})
export { handler as GET, handler as POST }
// export const  GET = handler;
// export const  POST = handler;
