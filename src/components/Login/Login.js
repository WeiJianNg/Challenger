import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useCookies } from "react-cookie";
import { useFormFields } from "../libs/hooksLib";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import {Card} from "react-bootstrap";

export default function Login() {
    const [cookies, setCookie] = useCookies();
    const history = useHistory();
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
        history.push("/feed");
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
        <div>
        <Header isLoginPage={true} />
        <Card style={{marginTop: "10rem", width: "30rem", margin: "0 auto"}} body>
        <Form onSubmit={handleSubmit} style={{marginTop: "20px", marginBottom: "20px"}}>
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
                Log In
            </Button>
        </Form>
        </Card>
        </div>
    );
}