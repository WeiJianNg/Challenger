import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormFields } from "../libs/hooksLib";
import { useHistory } from "react-router-dom"
import "./Signup.css";
import Header from "../Header/Header";
import {Card} from "react-bootstrap";


export default function Signup() {
    const history = useHistory();
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: "",
        confirmPassword: "",
        confirmationCode: "",
    });

    function validateForm() {
        return (
            fields.email.length > 0 &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }

    async function handleSubmit(event) {
        event.preventDefault();
        history.push("/login");
        // TODO: Add API call to signup
    }

    function renderForm() {
        return (
            <Card style={{marginTop: "10rem", width: "30rem", margin: "0 auto"}} body>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email" size="lg">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <Form.Group controlId="password" size="lg">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <Form.Group controlId="confirmPassword" size="lg">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={handleFieldChange}
                        value={fields.confirmPassword}
                    />
                </Form.Group>
                <Button
                    block
                    size="lg"
                    type="submit"
                    disabled={!validateForm()}
                >
                    Sign Up
                </Button>
            </Form>
            </Card>
        );
    }

    return (
        <div className="Signup">
            <Header isLoginPage={true} />
            {renderForm()}
        </div>
    );
}