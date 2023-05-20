import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

import sessionCallback from '@/backend/callbacks/next-auth/sessionCallback'
import signInCallback from '@/backend/callbacks/next-auth/signInCallback'
import customAuthorize from '@/backend/callbacks/next-auth/customAuthorize'

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        username: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" }
      },
      authorize: customAuthorize,
    })
  ],
  callbacks: {
    session: sessionCallback,
    signIn: signInCallback,
  },
  database: process.env.DATABASE_URL,
  secret: process.env.SECRET
}

export default NextAuth(options)
