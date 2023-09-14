import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    secret: '123-xyz',

    providers: [
        CredentialsProvider({
            name: "Credential",
            credentials: {
                username: { label: "username", type: "text", placeholder: "your name" },
                password: { label: "password", type: "password" } // Corrected 'type' field
            },
            async authorize(credentials, req) {
                // Replace this logic with your actual authentication logic
                if (credentials.username === 'user@example.com' && credentials.password === '1234') {

                    return { id: 1, email: credentials.username }; // Replace with the actual user object
                } else {
                    return null; // Authentication failed
                }
            }

        }),

        //Uncomment this section and provide your GitHub OAuth credentials
        GithubProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackUrl: process.env.CALLBACK_URL,
        }),
    ],
});

export { handler as GET, handler as POST };