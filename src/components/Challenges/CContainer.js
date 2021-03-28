import React from "react";
import {Card} from "react-bootstrap"

import CCBody from "../Challenges/CCBody"

const CContainer = ({user1, user2, user1_status, user2_status, challengeTitle, description, status, time, images, updateStatusCallback}) => {
  return (
    <div style={{marginTop: "1em"}}>
    <Card className="shadow-sm" body>
      <div className="challengeTitle d-flex justify-content-between">
        <h4>
          <u>{user1}</u> challenged <u>{user2}</u> to {challengeTitle}
        </h4>
        <h6>Status: {status}</h6>
      </div>
      <hr style={{marginTop: "0.5em"}}></hr>
        <CCBody 
                user1_status = {user1_status} 
                user2_status = {user2_status}
                user1 = {user1} 
                user2 = {user2} 
                description={description} 
                images={images} 
                updateStatusCallback = {updateStatusCallback}
        />
      <hr style={{marginBottom: "0.5em"}}></hr>
      <div className="challengeFooter d-flex justify-content-end">
        <span style={{fontSize: "0.8em"}}> posted on: {time}</span>
      </div>
    </Card>
    </div>
  );
};

export default CContainer;