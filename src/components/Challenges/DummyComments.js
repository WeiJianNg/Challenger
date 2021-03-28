import React from "react";
import {Comment, Header, Form, Button} from "semantic-ui-react"

const DummyComments = ({user1, user2}) => {
  return (
        <Comment.Group>
            <Header as='h3' dividing>
                Comments
            </Header>
            <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>{user1}</Comment.Author>
                <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>What a fantastic Challenge, I will do it!</Comment.Text>
                <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
            </Comment>
            <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>{user2}</Comment.Author>
                    <Comment.Metadata>
                        <div>Yesterday at 12:30AM</div>
                    </Comment.Metadata>
                    <Comment.Text>
                        <p>Yes, you are putting on some weights :p</p>
                    </Comment.Text>
                    <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
            <Form reply>
                <Form.TextArea />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary disabled/>
            </Form>
        </Comment.Group>
  );
};

export default DummyComments;