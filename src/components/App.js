import React from "react";
import Signup from "./Signup/Signup"
import Login from "./Login/Login";
import { useCookies } from "react-cookie";

const App = () => {
    const [cookies] = useCookies(["user", "isAuthenticated"]);

    return (
        <div>
            <Login />
            <p> {cookies.user}</p>
        </div>
    );
};

export default App;