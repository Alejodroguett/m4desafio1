import Card from 'react-bootstrap/Card';

function CardBootStrap ({ src, title, cardText}) {
    return (
        <Card style={{ width: '70vmin' }}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {cardText}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardBootStrap;