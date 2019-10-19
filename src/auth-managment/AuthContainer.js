import React, {useState} from "react";
import Register from "./Register";
import Login from "./Login";
import {signOut} from "../auth/signinHelpers";

export default function AuthContainer({user, setUser}){
    const [authView, setAuthView]= useState("login");
    console.log(user);
    console.log(user ? user.CognitoUser : "nope");
    return(
        <div className={"authContainer"}>
            {!user && authView === "register" && <Register setUser={setUser} setAuthView={setAuthView}/>}
            {!user && authView === "login" && <Login setUser={setUser} setAuthView={setAuthView}/>}
            {user && <div>
                {"Hello, " + user.attributes.preferred_username}
                <br/>
                <button onClick={() => {setAuthView("login"); signOut(setUser);}}>Log Out</button>
            </div>}
        </div>)
}
