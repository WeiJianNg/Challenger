import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useCookies } from "react-cookie";
import { useFormFields } from "../libs/hooksLib";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import {Card} from "react-bootstrap";
import axios from "axios"

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

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData()
        formData.append('username', fields.email)
        formData.append('password', fields.password)
        
        console.log("login: " + fields.email)
        console.log("password: " + fields.password)
       
        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/login/",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            console.log('success');
            setCookie("user", fields.email, {
                path:"/"
            });
            setCookie("isAuthenticated", true, {
                path: "/"
            });
            history.push("/feed");
        })
        .catch(err => {
            window.alert("Incorrect Username or Password. Please Try Again")
        });
    }

    return (
        <div>
            <Header isLoginPage={true} />
            <div className="d-flex align-items-center" style={{height: "80vh"}}>
                <Card className="shadow" style={{marginTop: "10rem", width: "30rem", margin: "0 auto"}} body>
                <h1>Challenge-Me!</h1>
                <hr></hr>
                <Form onSubmit={handleSubmit} style={{marginTop: "20px", marginBottom: "20px"}}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            autoFocus
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
        </div>
    );
}