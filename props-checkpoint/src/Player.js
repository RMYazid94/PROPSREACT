import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function Player(props){

return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        Team : {props.team}<br/>
        Country : {props.country}<br/>
        Number : {props.numeroMaillot}
        </Card.Text>
      </Card.Body>
    </Card>
)
}

export default Player;