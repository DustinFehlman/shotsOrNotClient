import React, { useState } from "react";
import './App.css';
import AuthContainer from "./auth-managment/AuthContainer";
import ProductViewContainer from "./product/ProductViewContainer";

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

        <ProductViewContainer/>
        <footer className={"helpInfo"}>
            <p>Please enjoy responsibly. Need help? <a className={"helpLink"} href={"https://www.samhsa.gov/find-treatment"}>Click Here</a></p>
        </footer>
    </div>
  );
}

export default App;
