import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CarouselImage({ data, afterChange }) {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel
            afterChange={afterChange}
            arrows={false}
            showDots
            containerClass={'slider-container'}
            infinite
            autoPlay
            transitionDuration={400}
            sliderClass={'certificates-slider'}
            responsive={responsive}>
            {
                data.map((item, indx) => (
                    <div key={indx} id={'item-' + indx} className={`text-center`}>
                        <img src={require(`./../assets/images/${item}`)} alt="" />
                    </div>
                ))
            }
        </Carousel>
    )
}

export default CarouselImage