import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image from './unknoun.webp';

function getCard() {
    return (
        <CardGroup>
            <Card border="info">
                <Card.Img variant="top" style={{ width: "100%", height: "100%" }} src={image} />
                <Card.Body>
                    <Card.Title style={{ color: "#87CEEB" }}>Person #1</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card border="info">
                <Card.Img variant="top" style={{ width: "100%", height: "100%" }} src={image} />
                <Card.Body>
                    <Card.Title style={{ color: "#87CEEB" }}>Person #2</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to
                        additional content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card border="info">
                <img variant="top" style={{ width: "100%", height: "100%" }} src={image} />
                <Card.Body>
                    <Card.Title style={{ color: "#87CEEB" }}>Person #3</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This card has even longer content than the
                        first to show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}

export default getCard;