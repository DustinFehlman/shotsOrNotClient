import React, {useState} from "react";
import {registerSubmit} from "../auth/registerHelpers"

export default function Register({setUser, setAuthView}) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [birthdate, setBirthdate] = useState(null);
    const [name, setName] = useState(null);
    const [username, setUsername] = useState(null);
    return (
        <form>
            Register
            <br/>
            <input placeholder={"Full Name"} type={"text"} name={"name"} onChange={(e) => setName(e.target.value)}/>
            <br/>
            <input placeholder={"Username"} type={"text"} name={"username"}
                   onChange={(e) => setUsername(e.target.value)}/>
            <br/>
            <input placeholder={"Email"} type={"text"} name={"email"} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <input placeholder={"Password"} type={"password"} name={"password"} onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            You must be of legal drinking <br/>
            age to register.<br/>
            When is your birthday?
            <br/>
            <input type={"date"} name={"birthday"} onChange={(e) => setBirthdate(e.target.value)}/>
            <br/>
            <button onClick={(e) => {
                e.preventDefault();
                setUser(registerSubmit({
                    birthdate: birthdate,
                    email: email,
                    password: password,
                    name: name,
                    username: username
                }))
            }}>Submit
            </button>
            <br/>
            <button onClick={() => setAuthView("login")}>Back to Sign In</button>
        </form>
    )
}