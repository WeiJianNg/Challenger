import React from "react";

import {Row, Col, Container, Button} from "react-bootstrap"

import Header from "../Header/Header";
import Challenges from "../Challenges/Challenges"

const Feed = () => {
  return (
      <div>
        <Header isLoginPage={false} />
        <Container style={{marginTop: "20px"}}>
        <Row>
          <Col>
            <div className="d-flex justify-content-between "> 
              <h3>Ongoing Challenges</h3>
              <Button variant="primary">+ Challenges</Button>
            </div>
            <hr></hr>
            <Challenges />
          </Col>
        </Row>
      </Container>
      </div>
  );
};

export default Feed;