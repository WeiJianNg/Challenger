import React from "react";
import Login from "./Login/Login";
import { useCookies } from "react-cookie";

const App = () => {
    const [cookies] = useCookies(["user", "isAuthenticated"]);

    return (
        <div>
            <p> {cookies.isAuthenticated} </p>
            <Login />
            <p> {cookies.user}</p>
        </div>
    );
};

export default App;