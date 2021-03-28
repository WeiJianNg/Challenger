import { React} from "react";
import {Modal, Button} from "react-bootstrap"
import {Form} from "semantic-ui-react"
import {DropzoneArea} from 'material-ui-dropzone'

const UploadProofModal = ({show, handleCloseModal, submitChallenge}) => {
    return (
        <Modal show={show} size="lg"> 
            <Modal.Header closeButton>
                <Modal.Title>Challenge Completed - Too easy ... (Placeholder - not implemented)</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>Additional Comments</h3>
                <Form reply>
                    <Form.TextArea />
                </Form>
                <h3>Upload Proof</h3>
                <DropzoneArea style={{height: "15vh"}}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {handleCloseModal()}}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {handleCloseModal()}}>
                    Submit Proof!
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UploadProofModal;