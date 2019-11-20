import React from 'react';
import { Card, ListGroup, Row, Col } from 'react-bootstrap';
import '../../styles/cards.css';

const GithubCard = (props) => {
    // console.log("githubcard props", props);
    return (
        <Card className="cardContainer">
            <a href={`${props.githubDp}`} target="_blank" rel="noopener noreferrer">
                <Card.Img variant="top" src={props.githubDp} />
            </a>
            <Card.Body>
                <Card.Title className="cardTitle">Github Info:</Card.Title>

                <ListGroup>
                    <ListGroup.Item><b>Name:</b> {props.githubName}</ListGroup.Item>
                    {props.githubBio && <ListGroup.Item><b>Bio:</b> <blockquote>{props.githubBio}</blockquote></ListGroup.Item>}
                    <ListGroup.Item>
                        <Row>
                            <Col><b>Followers:</b> {props.githubFollowers}</Col>
                            <Col><b>Following:</b> {props.githubFollowing}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item><b>Public Repos:</b> {props.repos}</ListGroup.Item>
                    {props.githubBlog && <ListGroup.Item><b>Blog:</b> <a href={`https://${props.githubBlog}`} target="_blank" rel="noopener noreferrer">{props.githubBlog}</a></ListGroup.Item>}
                    {props.githubCompany && <ListGroup.Item><b>Company:</b> {props.githubCompany}</ListGroup.Item>}
                    {props.githubLocation && <ListGroup.Item><b>Location:</b> {props.githubLocation}</ListGroup.Item>}
                    <ListGroup.Item><a href={`https://github.com/${props.githubUsername}`} target="_blank" rel="noopener noreferrer">See Profile</a></ListGroup.Item>
                </ListGroup>


            </Card.Body>
        </Card>
    );
}

export default GithubCard;
