import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img src='../public/images/mallefecent.jpg' className='imgSlider' />
                <Carousel.Caption>
                    <h3>MALEFICENT</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, architecto!.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='../public/images/wick.jpg' className='imgSlider' />
                <Carousel.Caption>
                    <h3>JOHN WICK 4</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='../public/images/avengers.jpg' className='imgSlider' />
                <Carousel.Caption>
                    <h3>AVENGERS: END GAME</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='../public/images/mazerunner.jpg' className='imgSlider' />
                <Carousel.Caption>
                    <h3>MAZE RUNNER</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;