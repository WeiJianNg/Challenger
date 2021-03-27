import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useCookies } from "react-cookie";
import "./Login.css";

export default function Login() {
    const [cookies, setCookie] = useCookies()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setCookie("user", email, {
            path:"/"
        })
        setCookie("isAuthenticated", true, {
            path: "/"
        })
        /*
        try {
            await authenticator.login(email, password); // wait for backend API call function
            userHasAuthenticated(true);
        } catch (e) {
            alert(e.message);
        }
        */
    }

    return (
        <div className="Login">
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />`
            </Form.Group>

            <Button block size="lg" type="submit" disabled={!validateForm()}>
                Login
            </Button>
        </Form>
        </div>
    );
}