import React from "react";
import {Card} from "react-bootstrap"

import CCBody from "../Challenges/CCBody"

const CContainer = ({user1, user2, challengeTitle, description, status, 
            time, images, updateStatusCallback, isProposer, isUser, id, 
            handleShowProofModal, handleCloseProofModal,  showProofModal }) => {
  var statusMap ={
    4: "Failed",
    3: "Declined",
    1: "Ongoing",
    0: "Completed",
  }
  
  var color={
    4: "text-danger",
    1: "text-warning",
    0: "text-success",
  }

  return (
    <div style={{marginTop: "1em"}}>
    <Card className="shadow-sm" body>
      <div className="challengeTitle d-flex justify-content-between">
        <h4>
          <u>{user1}</u> challenged <u>{user2}</u> to {challengeTitle}
        </h4>
        <h6 className={color[status]}> Status: {statusMap[status]}
        </h6>
      </div>
      <hr style={{marginTop: "0.5em"}}></hr>
        <CCBody 
                challengeId = {id}
                isProposer = {isProposer}
                isUser = {isUser}
                user1 = {user1} 
                user2 = {user2} 
                description={description} 
                images={images} 
                status={status}
                updateStatusCallback = {updateStatusCallback}
                handleShowProofModal={handleShowProofModal} 
                handleCloseProofModal={handleCloseProofModal}
                showProofModal={showProofModal}
        />
      <hr style={{marginBottom: "0.5em"}}></hr>
      <div className="challengeFooter d-flex justify-content-end">
        <span style={{fontSize: "0.8em"}}>Posted on: {time}</span>
      </div>
    </Card>
    </div>
  );
};

export default CContainer;