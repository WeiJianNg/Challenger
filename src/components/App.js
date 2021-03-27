import React, {useState} from "react";
import Login from "./Login/Login";
import { AppContext } from "./shared_code/login_context.js";

const App = () => {
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState("")

    return (
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated, userEmail, setUserEmail }}>
            {userEmail}
        <div>
            <Login />
        </div>
        </AppContext.Provider>
    );
};

export default App;