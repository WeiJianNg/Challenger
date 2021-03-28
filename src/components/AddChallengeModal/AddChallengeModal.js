import { React, useState, useRef } from "react";
import {Modal, Button} from "react-bootstrap"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios"

const AddChallengeModal = ({refresh, cookies, show, handleCloseModal, friendList}) => {
    const [selectedFile, setFiles] = useState([])
    const title = useRef(null)
    const description = useRef(null)
    const friendName = useRef(null)

    function onChangeHandler(e) {
        setFiles(e.target.files)
    }

    function submitChallenge() {
        const formData = new FormData()
        formData.append('image', selectedFile[0])
        formData.append('title', title.current.children[1].children[0].value)
        formData.append('description', description.current.children[1].children[0].value)
        formData.append('user', friendName.current.children[1].children[0].value)
        formData.append('proposer', cookies.cookies.user)
        formData.append('status', 1)
        
        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/post_challenges/",
            responseType: 'arraybuffer',
            responseEncoding: 'binary',
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            refresh()
            console.log('success');
            handleCloseModal()
        })
        .catch(err => {
            console.log(err)
            window.alert("Unable to add challenge. Please Try Again")
        });
    }

    var style={ "width": "60%", "marginTop": "1.5vh"}

    return (
        <Modal show={show} size="lg" onHide={handleCloseModal}> 
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
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} label="Select Friend" variant="outlined" ref={friendName} />}
            />
            <input style={style} type="file" name="images" onChange={onChangeHandler} accept="image/*" />
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