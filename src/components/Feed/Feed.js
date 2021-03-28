import {React, useState} from "react";

import {Row, Col, Container, Button} from "react-bootstrap"

import Header from "../Header/Header";
import Challenges from "../Challenges/Challenges"
import AddChallengeModal from "../AddChallengeModal/AddChallengeModal";

const Feed = () => {
  const [showModal, setShowModal] = useState(true)
  
  function handleShowModal() {
    setShowModal(true)
  }

  function handleCloseModal() {
    setShowModal(false)
  }

  // Example friendlist 
  var friendList = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  ];

  return (
      <div>
        <Header isLoginPage={false} />
        <Container style={{marginTop: "20px"}}>
          <Row>
            <Col>
              <div className="d-flex justify-content-between "> 
                <h3>Ongoing Challenges</h3>
                <Button variant="primary" onClick={()=>{handleShowModal()}}>+ Challenges</Button>
              </div>
              <hr></hr>
              <Challenges />
            </Col>
          </Row>
        </Container>
        <AddChallengeModal show={showModal} handleCloseModal={handleCloseModal} friendList={friendList}/>
      </div>
  );
};

export default Feed;