import React from 'react';
import { Card, ListGroup, Row, Col } from 'react-bootstrap';
import '../../styles/cards.css';

const InstagramCard = (props) => {
    // console.log("Igcard props", props);
    return (
        <Card className="cardContainer">
            <a href={`${props.instaDp}`} target="_blank" rel="noopener noreferrer" download><Card.Img variant="top" src={props.instaDp} /></a>

            <Card.Body>
                <Card.Title className="cardTitle">Instagram Info:</Card.Title>

                <ListGroup>
                    <ListGroup.Item><b>Name:</b> {props.instaName}</ListGroup.Item>
                    <ListGroup.Item><b>Verified?:</b> {`${props.isVerified}`}</ListGroup.Item>
                    <ListGroup.Item><b>Bio:</b> <blockquote>{props.instaBio}</blockquote></ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col sm={4} style={{ padding: "0px 15px" }}><b>Posts:</b> {props.instaPosts}</Col>
                            <Col sm={4} style={{ padding: "0px 8px" }}><b>Followers:</b> {props.instaFollowers}</Col>
                            <Col sm={4} style={{ padding: "0px 8px" }}><b>Following:</b> {props.instaFollowing}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item><a href={`https://instagram.com/${props.username}`} target="_blank" rel="noopener noreferrer">See Profile</a></ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default InstagramCard;
