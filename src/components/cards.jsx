import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ title, year, rating, genre, quantity, price, imgSrc }) {

    const [Tickets, setState] = React.useState(quantity);
    let classes = 'card';
    if (Tickets === 0) {
        classes = 'sold'
    }


    const booking = () => {
        setState(Tickets - 1);
        alert('Booking Confirmed');
    }

    return (
        <Card className={classes}>
            <img variant="top" className='imgCard' src={imgSrc} alt={title} />
            <Card.Body>
                <Card.Title>{title}?</Card.Title>
                <Card.Text >
                    Year: {year}
                    <br />
                    Rating: {rating}
                    <br />
                    Genre: {genre}
                    <br />
                    Quantity: {Tickets}
                    <br />
                    Price: {price}
                </Card.Text>
                <Button variant="primary" onClick={booking} disabled={Tickets === 0}>Book now</Button>
                {!(Tickets > 1) && <Card.Text className='text-center mt-2 '>
                    <small className="text-muted p-1 rounded warning">{(Tickets === 0) ? 'SOLD OUT' : 'Last Ticket'}</small>
                </Card.Text>}
            </Card.Body>
        </Card>
    );
}

export default Cards;