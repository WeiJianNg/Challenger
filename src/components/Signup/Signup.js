import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormFields } from "../libs/hooksLib";
import { useHistory } from "react-router-dom"
import Header from "../Header/Header";
import {Card} from "react-bootstrap";
import axios from "axios"


export default function Signup() {
    const history = useHistory();
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        username: "",
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
        const formData = new FormData()
        formData.append('email', fields.email)
        formData.append('username', fields.username)
        formData.append('password1', fields.password)
        formData.append('password2', fields.confirmPassword)
        console.log(fields.email)
        console.log(fields.username)
        console.log(fields.password)
        console.log(fields.confirmPassword)
        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/register/",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            console.log('success');
            history.push("/login");
        })
        .catch(err => {
            window.alert("Unable To Register. Please Try Again")
        });
    }

    function renderForm() {
        return (
            <div className="d-flex align-items-center" style={{height: "80vh"}}>
                <Card style={{marginTop: "10rem", width: "30rem", margin: "0 auto"}} body>
                <h1>Registration</h1>
                <hr></hr>
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
                    <Form.Group controlId="username" size="lg">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            autoFocus
                            value={fields.username}
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
                            value={fields.confirmPassword}
                            onChange={handleFieldChange}
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
            </div>
        );
    }

    return (
        <div className="Signup">
            <Header isLoginPage={true} />
            {renderForm()}
        </div>
    );
}