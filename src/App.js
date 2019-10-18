import React, { useState } from "react";
import './App.css';
import AuthContainer from "./auth-managment/AuthContainer";

function App() {
    const [user, setUser] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
          <div className={"logo-container"}>
              <img src={"full logo trans md.png"} width={"300"}/>
          </div>
          <AuthContainer user={user} setUser={setUser}/>
      </header>
    </div>
  );
}

export default App;
