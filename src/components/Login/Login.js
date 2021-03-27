import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useCookies } from "react-cookie";
import { useFormFields } from "../libs/hooksLib";
import Header from "../Header/Header"
import "./Login.css";

export default function Login() {
    const [cookies, setCookie] = useCookies()
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: ""
    });
  
    function validateForm() {
        return fields.email.length > 0 && fields.password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setCookie("user", fields.email, {
            path:"/"
        });
        setCookie("isAuthenticated", true, {
            path: "/"
        });

        // TODO: replace with API call to login
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
            <Header isLoginPage={true} />
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    value={fields.email}
                    onChange={handleFieldChange}
                />
            </Form.Group>

            <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={fields.password}
                    onChange={handleFieldChange}
                />`
            </Form.Group>

            <Button block size="lg" type="submit" disabled={!validateForm()}>
                Login
            </Button>
        </Form>
        </div>
    );
}