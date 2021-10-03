import React from "react";
import { Auth0Provider } from '@auth0/auth0-react';

export const LoginButton = () => {
    const { LoginWithRedirect } = useAuth0();
    return <button onClick ={()=>LoginWithRedirect()}>Login</button>
}