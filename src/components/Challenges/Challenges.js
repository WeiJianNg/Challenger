import React from "react";

import CContainer from "../Challenges/CContainer"

const Challenges = ({challenges, cookies, updateStatusCallback, handleShowProofModal, handleCloseProofModal, showProofModal}) => {
  var dummyImgUrl = ["https://images.idgesg.net/images/article/2019/04/google-shift-100794036-large.jpg"]

  return (
      <div>
        {
          challenges.map((challenge, index) => {
          return <CContainer 
                    id={challenge.id}
                    updateStatusCallback = {updateStatusCallback}
                    user1={challenge.proposer} 
                    user2={challenge.user}
                    isProposer={cookies.cookies.user === challenge.proposer}
                    isUser={cookies.cookies.user === challenge.user}
                    challengeTitle={challenge.title}
                    description={challenge.description}
                    status={challenge.status}
                    time={challenge.date_posted.slice(0, 10)}
                    images={dummyImgUrl}
                    handleShowProofModal={handleShowProofModal} 
                    handleCloseProofModal={handleCloseProofModal}
                    showProofModal={showProofModal}
                  />
          })
        }
      </div>
  );
};

export default Challenges;