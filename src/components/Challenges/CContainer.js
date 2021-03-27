import React from "react";
import {Card} from "react-bootstrap"

import CCBody from "../Challenges/CCBody"

const CContainer = ({user1, user2, challengeTitle, description, status, time}) => {
  return (
    <div style={{marginTop: "1em"}}>
    <Card className="shadow-sm" body>
      <div className="challengeTitle d-flex justify-content-between">
        <h6>
          <u>{user1}</u> challenged <u>{user2}</u> to {challengeTitle}
        </h6>
        <h6>Status: {status}</h6>
      </div>
      <hr style={{marginTop: "0.5em"}}></hr>
        <CCBody description={description} />
      <hr style={{marginBottom: "0.5em"}}></hr>
      <div className="challengeFooter d-flex justify-content-end">
        <span style={{fontSize: "0.8em"}}> posted on: {time}</span>
      </div>
    </Card>
    </div>
  );
};

export default CContainer;