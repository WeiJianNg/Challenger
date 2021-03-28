import {React, useState, useEffect} from "react";
import {Row, Col, Container, Button} from "react-bootstrap"
import axios from "axios"
import Header from "../Header/Header";
import Challenges from "../Challenges/Challenges"
import AddChallengeModal from "../AddChallengeModal/AddChallengeModal";

const Feed = (cookies) => {
  const [showModal, setShowModal] = useState(false)
  const [challenges, setChallenges] = useState([])  

  // eslint-disable-next-line 
  useEffect(() => onPageLoad(), [])

  // Function to calculate string difference

  // Function to fetch list of challenges and render to page
  function onPageLoad() {
    const formData = new FormData()
    formData.append('user', cookies.cookies.user)
   
    axios({
        method: "GET",
        url: "http://127.0.0.1:8000/post_challenges/",
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(response => {
        let sortedData = []

        // Rearrange bring forth user's challenges first
        for (let i = 0; i < response.data.length; i++) {
            console.log(cookies.cookies.user)
            if (response.data[i].user === cookies.cookies.user) {
              sortedData.push(response.data[i])
            }
        }
        
        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].user !== cookies.cookies.user) {
              sortedData.push(response.data[i])
            }
        }
        setChallenges(sortedData)
        console.log('success');
    })
    .catch(err => {
        console.log(err)
    });
  } 

  function updateStatusCallback() {
    onPageLoad()
  }

  function handleShowModal() {
    setShowModal(true)
  }

  function handleCloseModal() {
    setShowModal(false)
  }

  // Example friendlist 
  var friendList = [
    { name: 'test1'},
    { name: 'test2'},
    { name: 'test3'},
    { name: 'test4'},
    { name: 'test5'},
    { name: 'wjn13'}
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
              <Challenges challenges={challenges} cookies={cookies} updateStatusCallback={updateStatusCallback}/>
            </Col>
          </Row>
        </Container>
        <AddChallengeModal refresh={updateStatusCallback} show={showModal} cookies={cookies} handleCloseModal={handleCloseModal} friendList={friendList}/>
      </div>
  );
};

export default Feed;