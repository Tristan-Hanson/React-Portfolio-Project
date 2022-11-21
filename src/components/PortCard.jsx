import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PortCard(props) {
  return (
    <Card className='projectCard'style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`./img/${props.port.image}`} />
      <Card.Body>
        <Card.Title>{props.port.title}</Card.Title>
        <Card.Text>
          {props.port.description}
        </Card.Text>
        <Button as='a' href={props.port.link}>Go the site</Button>
      </Card.Body>
    </Card>
  );
}

export default PortCard;