import React, {useState} from "react";

import CContainer from "../Challenges/CContainer"

const Challenges = () => {
  // Declare list of challenges
  const [challenges, setChallenges] = useState([
    {
      "user1": "Alex",
      "user2": "Boon",
      "challengeTitle": "run 5km",
      "description": "Run 5km",
      "status": "Ongoing",
      "time": "19/11/2019"
    },
    {
      "user1": "Alex",
      "user2": "Boon",
      "challengeTitle": "run 5km",
      "description": "Run 5km",
      "status": "Ongoing",
      "time": "19/11/2019"
    }
  ])  

  //TODO: Some function to fetch a list of challenges from backend server
  return (
      <div>
        {
          challenges.map((challenge, index) => {
          return <CContainer 
                    id={"challenge" + index}
                    user1={challenge.user1} 
                    user2={challenge.user2}
                    challengeTitle={challenge.challengeTitle}
                    description={challenge.description}
                    status={challenge.status}
                    time={challenge.time}/>
          })
        }
      </div>
  );
};

export default Challenges;