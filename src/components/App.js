import React from "react";
import Signup from "./Signup/Signup"
import Login from "./Login/Login";
import { useCookies } from "react-cookie";
import { Switch, Route, Link } from "react-router-dom";

const App = () => {
    const [cookies] = useCookies(["user", "isAuthenticated"]);

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
                <Route path="/signup">
                    <Signup />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>
            </Switch>

            <p> {cookies.user}</p>
        </div>
    );
};

export default App;