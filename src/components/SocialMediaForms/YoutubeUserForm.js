import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/forms.css';

const InstaUserForm = (props) => {
    // console.log("InstaUserForm props", props);
    return (
        <div>
            <form onSubmit={props.getYoutubeChannel}>
                <input type="text" name="YTchannelId" placeholder="Enter YT channel ID" className="inputBox" />
                <p style={{ margin: "0" }}><a href="https://www.youtube.com/watch?v=0dxbS5-QAPE" target="_blank" rel="noopener noreferrer" style={{ padding: "0", margin: "0", fontSize: "14px" }} >How to get channel ID?</a></p>
                <Button variant="primary" type="submit" className="submitBtn">Submit</Button>
            </form>
        </div>
    );
}

export default InstaUserForm;
