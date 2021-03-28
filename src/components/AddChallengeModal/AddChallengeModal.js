import { React, useState, useRef } from "react";
import {Modal, Button} from "react-bootstrap"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios"

const AddChallengeModal = ({show, handleCloseModal, friendList}) => {
    const [selectedFiles, setFiles] = useState([])
    const title = useRef(null)
    const description = useRef(null)
    const friendName = useRef(null)

    function onChangeHandler(e) {
        setFiles(e.target.files)
    }

    function submitChallenge() {
        const formData = new FormData()
        for (var i = 0; i < selectedFiles.length; i++) {
            formData.append('images', selectedFiles[i])
        }
        formData.append('title', title.current.children[1].children[0].value)
        formData.append('description', description.current.children[1].children[0].value)
        formData.append('friendName', friendName.current.children[1].children[0].value)
        
        axios({
            method: "POST",
            url: "/",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }

    var style={ "width": "60%"}

    return (
        <Modal show={show} size="lg"> 
        <Modal.Header closeButton>
        <Modal.Title>Challenge Someone!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form noValidate autoComplete="off">
            <TextField id="challengeTitle" label="Challenge Title" style={style} ref={title}/>
            <TextField id="challengeDescription" label="Challenge Description" style={style} ref={description}/>
            <Autocomplete
                id="friendName"
                className="mt-3"
                options={friendList}
                style = {style}
                size="small"
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} label="Select Victim" variant="outlined" ref={friendName} />}
            />
            <input type="file" name="images" onChange={onChangeHandler} accept="image/*" multiple/>
        </form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={() => {handleCloseModal()}}>
            Close
        </Button>
        <Button variant="primary" onClick={() => {submitChallenge()}}>
            Submit Challenge!
        </Button>
        </Modal.Footer>
    </Modal>
    );
};



export default AddChallengeModal;