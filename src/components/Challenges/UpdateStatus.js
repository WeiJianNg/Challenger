import React from "react";
import axios from "axios"
import { Icon, Button} from "semantic-ui-react"

const UpdateStatus = ({challengeId, isUser, isProposer, user, status, updateStatusCallback}) => {
    // Sample data to check parent state can be updated
    function completeEventHandler() {
        // TODO - ADD AJAX CALL TO COMPLETE
        const formData = new FormData()
        formData.append('id', challengeId)
        formData.append('status', 0)
        axios({
            method: "PUT",
            url: "http://127.0.0.1:8000/post_challenges/",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            console.log('success');
            updateStatusCallback()
        })
        .catch(err => {
            console.log(err)
        });
    }

    function forfeitEventHandler() {
        // TODO - ADD AJAX CALL TO COMPLETE
        const formData = new FormData()
        formData.append('id', challengeId)
        formData.append('status', 4)
        axios({
            method: "PUT",
            url: "http://127.0.0.1:8000/post_challenges/",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            console.log('success');
            updateStatusCallback()
        })
        .catch(err => {
            console.log(err)
        });
    }

    console.log(challengeId)
    return (
        <div className="mt-3">
            {   status === 4 ?
                    <div>
                        <p>{user} has forfeited the challenge  <Icon name='ban' /></p>
                    </div>
                :
                status === 1 ?
                (!isProposer && isUser ?
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
                        <p>{user} is still working on the challenge! <Icon name='idea' /></p>
                    </div>
                )
                : 
                <div>
                    <p>{user} has already completed the challenge! <Icon name='checkmark' /></p>
                </div>
            }
        </div>
    );
};

export default UpdateStatus;