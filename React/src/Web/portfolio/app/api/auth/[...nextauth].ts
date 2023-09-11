import NextAuth from "next-auth"
import CredentialsProvider, { CredentialInput } from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<string, CredentialInput>) {
          const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
          return user
        }
    })
  ],
  
}

export default NextAuth(authOptions)