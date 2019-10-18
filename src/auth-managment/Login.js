import React, { useState } from "react";
import {signIn} from "../auth/signinHelpers";

export default function Login({setUser, setAuthView}){
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return(
        <div>
            <form>
                Sign In
                <br/>
                <input placeholder={"Email"} type={"text"} name={"email"} onChange={(e) => setEmail(e.target.value)}/>
                <br/>
                <input placeholder={"Password"} type={"password"} name={"password"} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <button onClick={(e) => { e.preventDefault(); signIn(email, password, setUser)}}>Login</button>
                 <br/>
                <button onClick={() => setAuthView("register")}>Register</button>
            </form>
        </div>
    )
}