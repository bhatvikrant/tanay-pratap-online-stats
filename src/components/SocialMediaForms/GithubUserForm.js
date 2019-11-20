import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/forms.css';

const UserForm = (props) => {
    return (
        <form onSubmit={props.getGithubUser}>
            <input type="text" name="username" placeholder="Enter Github Username"  className="inputBox" />
            <Button variant="primary" type="submit" className="submitBtn">Submit</Button>
        </form>
    );
}

export default UserForm;
