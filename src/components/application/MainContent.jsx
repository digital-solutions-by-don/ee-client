import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardDeck, Container, Image
} from 'react-bootstrap';
import Logo from '../../imgs/EmergencyElectricLogo.svg';
const cardContent = [
  {
    id    : 1,
    header: 'Messages',
    title : 'Send us a Message',
    body  : 'Do you need a quote on services needed.  Would you like to leave feedback on a recent service.  Send us a message and we will respond to you with in the next business day!',
    path  : '/dashboard/messages',
  },
  {
    id    : 2,
    header: 'Applications',
    title : `We're hiring!`,
    body  : 'We are accepting applications.  Feel free to apply online now!',
    path  : '/dashboard/application',
  },
];

const MainContent = () => {
  return (
    <Container className='d-flex align-items-center flex-column justify-content-around h-75'>
      <Image rounded fluid src={Logo} alt="Emergency Electric Inc" className='shadow'/>
    <CardDeck>
      {cardContent.map( ( { id, header, title, body, path } ) => {
        return (
          <Card className='shadow border-left-primary' key={id}>
            <Card.Header>{header}</Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{body}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={path} className='btn btn-primary'>{header}</Link>
            </Card.Footer>
          </Card>
        );
      } )}
    </CardDeck>
    </Container>
  );
};

export default MainContent;