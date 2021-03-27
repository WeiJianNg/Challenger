import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import ImgCarousel from "../ImgCarousel/ImgCarousel"

const CCBody = ({description}) => {
  return (
    <Container>
        <Row>
            <Col>
                <ImgCarousel />
            </Col>
            <Col>
                <div className="challengeDescription">
                    <p> Description: {description}</p>
                </div>
            </Col>
        </Row>
    </Container>
  );
};

export default CCBody;