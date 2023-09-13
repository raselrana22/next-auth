import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const CLIENT_ID = '2b25a137db6f647425aa'
// console.log(CLIENT_ID);

const CLIENT_SECRET = '5d4a5f0af4e18baf1ff8f3720aa8ae46005171ae'
// console.log(CLIENT_ID);


const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    secret: '123-xyz',
    providers: [
        GithubProvider({
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
        }),
    ],
});

export { handler as GET, handler as POST }