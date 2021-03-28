import React, { useState } from "react";
import {Row, Col, Container} from "react-bootstrap";
import Header from "../Header/Header"

export default function Profile() {
    const [profile, setProfile] = useState({
        "username": "alex123",
        "email": "alex@gmail.com",
        "country": "United Kingdom"
    })

    return (
        <div>
        <Header isLoginPage={false} />
        <Container style={{marginTop: "20px"}} >
            <Row>
                <Col>
                    Username
                </Col>
                <Col>
                    {profile.username}
                </Col>
            </Row>

            <Row>
                <Col>
                    Email
                </Col>
                <Col>
                    {profile.email}
                </Col>
            </Row>

            <Row>
                <Col>
                    Country
                </Col>
                <Col>
                    {profile.country}
                </Col>
            </Row>

        </Container>
        </div>
    )
};

