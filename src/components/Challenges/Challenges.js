import React, { useState, useEffect } from "react";

import CContainer from "../Challenges/CContainer"

const Challenges = () => {
  // Declare list of challenges
  const [challenges, setChallenges] = useState([])  

  useEffect(() => onLoad(), [])

  // Function to fetch list of challenges and render to page
  function onLoad() {
    // TODO AJAX call to server to get challenges list
    setChallenges([
      {
        "challengeId": 1,
        "user1": "Alex",
        "user2": "Boon",
        "user1_status": "complete",
        "user2_status": "ongoing",
        "challengeTitle": "run 5km",
        "description": "Run 5km",
        "status": "Ongoing",
        "time": "19/11/2019",
        "images": ["https://images.idgesg.net/images/article/2019/04/google-shift-100794036-large.jpg", 
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_962098266_200013332000928094_440161.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Green_Building_-_MIT%2C_Cambridge%2C_MA_-_DSC05589.jpg/240px-Green_Building_-_MIT%2C_Cambridge%2C_MA_-_DSC05589.jpg"
        ]
      },
      {
        "challengeId": 2,
        "user1": "Yee Wen",
        "user2": "Terran",
        "user1_status": "complete",
        "user2_status": "ongoing",
        "challengeTitle": "run 5km",
        "description": "Run 5km",
        "status": "Ongoing",
        "time": "19/11/2019",
        "images": []
      }
    ])
  }

  // Callback Function that updates the challenges list after update say a status
  function updateStatusCallback(challenges) {
    setChallenges(challenges) 
  }

  return (
      <div>
        {
          challenges.map((challenge, index) => {
          return <CContainer 
                    id={"challenge" + index}
                    updateStatusCallback = {updateStatusCallback}
                    user1={challenge.user1} 
                    user1_status = {challenge.user1_status}
                    user2_status = {challenge.user2_status}
                    user2={challenge.user2}
                    challengeTitle={challenge.challengeTitle}
                    description={challenge.description}
                    status={challenge.status}
                    time={challenge.time}
                    images={challenge.images}/>
          })
        }
      </div>
  );
};

export default Challenges;