'use client'

import Buttons from '../components/buttons';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Login() {
    const { data: session } = useSession()
    console.log(session);
    if (session) {
        return (
            <>
                <Buttons />
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            <Buttons />
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}