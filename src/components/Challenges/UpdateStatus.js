import React from "react";
import { Icon, Button} from "semantic-ui-react"

const UpdateStatus = ({user, user_status, updateStatusCallback}) => {
    // Sample data to check parent state can be updated
    var sampleReturnedChallenges = [
        {
            "challengeId": 1,
            "user1": "Alex",
            "user2": "Boon",
            "user1_status": "complete",
            "user2_status": "complete",
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
            "user2_status": "complete",
            "challengeTitle": "run 5km",
            "description": "Run 5km",
            "status": "Ongoing",
            "time": "19/11/2019",
            "images": []
          }
    ]

    function completeEventHandler() {
        // TODO - ADD AJAX CALL TO COMPLETE
        updateStatusCallback(
            sampleReturnedChallenges
        )
    }

    function forfeitEventHandler() {
        // TODO - ADD AJAX CALL TO COMPLETE
        updateStatusCallback(
            sampleReturnedChallenges
        )
    }

    return (
        <div className="mt-3">
        <h3 className="m-0">{user}</h3>
            {
                user_status === "ongoing" ?
                <div>
                    <Button content='Complete Challenge' size = "small" color = "green" onClick={() => {
                            completeEventHandler()
                        }}/>
                    <Button content='Forfeit Challenge' size = "small" color = "red" onClick={() => {
                            forfeitEventHandler()
                        }}/>
                </div>
                : 
                <div>
                    <p>{user} has already completed the challenge! <Icon name='checkmark' /></p>
                </div>
            }
        </div>
    );
};

export default UpdateStatus;