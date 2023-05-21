import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

import googleAuthorize from '@/backend/callbacks/next-auth/googleAuthorize'
import customAuthorize from '@/backend/callbacks/next-auth/customAuthorize'
import signInCallback from '@/backend/callbacks/next-auth/signInCallback'

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        username: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: customAuthorize,
    })
  ],
  callbacks: {
    session: googleAuthorize,
    signIn: signInCallback,
  },
  database: process.env.DATABASE_URL,
  secret: process.env.SECRET
}

export default NextAuth(options)
