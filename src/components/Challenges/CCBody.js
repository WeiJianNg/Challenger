import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { Tab } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css';

import ImgCarousel from "../ImgCarousel/ImgCarousel"
import DummyComments from "../Challenges/DummyComments"
import UpdateStatus from "../Challenges/UpdateStatus"

const CCBody = ({user1, user2, status, description, images, updateStatusCallback, isProposer, isUser, challengeId}) => {
    const panes = [
        { menuItem: 'Details', render: () => 
                <Tab.Pane>
                    {description}
                    <UpdateStatus challengeId={challengeId} isUser={isUser} isProposer={isProposer} user={user2} status={status} updateStatusCallback = {updateStatusCallback} />
                </Tab.Pane> 
        },
        { 
            menuItem: 'Comments', render: () => 
                <Tab.Pane >
                    <DummyComments user1={user1} user2={user2}/>
                </Tab.Pane> 
        },
      ]
    
    return (
        <Container>
            {
                images.length === 0 ?         
                <Row>
                    <Col>
                        <div className="challengeDescription">
                            <Tab panes={panes}/>
                        </div>
                    </Col>
                </Row>
                :
                <Row>
                    <Col>
                        <ImgCarousel images={images}/>
                    </Col>
                    <Col>
                        <div className="challengeDescription">
                            <Tab panes={panes} />
                        </div>
                    </Col>
                </Row>
            }
        </Container>
    );
};

export default CCBody;