import React from "react";
import Signup from "./Signup/Signup"
import Login from "./Login/Login";
import Home from "./Home/Home"
import { useCookies } from "react-cookie";
import { Switch, Route} from "react-router-dom";

const App = () => {
    const [cookies] = useCookies(["user", "isAuthenticated"]);

    return (
        <div>
            <Switch>
                {/* If the current URL is /about, this route is rendered
                while the rest are ignored */}
                <Route path="/signup">
                    <Signup />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>

            <p> {cookies.user}</p>
        </div>
    );
};

export default App;