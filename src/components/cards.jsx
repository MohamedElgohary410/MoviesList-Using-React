import React from 'react';
import Card from 'react-bootstrap/Card';
import { StyledButtons } from '../StyledButtons/StyledBtn';

function Cards({ title, year, rating, genre, quantity = Math.floor(Math.random() * 10), price, imgSrc = '../../public/images/ring.jpg' }) {

    const [Tickets, setState] = React.useState(quantity);
    let classes = 'card';
    if (Tickets === 0) {
        classes = 'sold'
    }
    const booking = () => {
        setState(Tickets - 1);
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
                    Genre: {genre.map((genre) => genre + ' ')}
                    <br />
                    Quantity: {Tickets}
                    <br />
                    Price: {price}
                </Card.Text>
                <StyledButtons onClick={booking} disabled={Tickets === 0}>Book now</StyledButtons>
                {!(Tickets > 1) && <Card.Text className='text-center mt-2 '>
                    <small className="text-muted p-1 rounded warning">{(Tickets === 0) ? 'SOLD OUT' : 'Last Ticket'}</small>
                </Card.Text>}
            </Card.Body>
        </Card>
    );
}

export default Cards;