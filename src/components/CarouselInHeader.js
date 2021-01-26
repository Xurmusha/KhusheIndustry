import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        id: 1,
        altText: 'Slide 1',
        caption: 'Slide 1',
        image: "carousel-img.jpg"
    },
    {
        id: 2,
        altText: 'Slide 2',
        caption: 'Slide 2',
        image: "carousel-img1.jpg"
    },
    {
        id: 3,
        altText: 'Slide 3',
        caption: 'Slide 3',
        image: "carousel-img2.jpg"
    },
    {
        id: 4,
        altText: 'Slide 4',
        caption: 'Slide 4',
        image: "carousel-img3.jpg"
    },
    {
        id: 5,
        altText: 'Slide 5',
        caption: 'Slide 5',
        image: "carousel-img4.jpg"
    },
    {
        id: 6,
        altText: 'Slide 6',
        caption: 'Slide 6',
        image: "carousel-img5.jpg"
    },
    {
        id: 7,
        altText: 'Slide 7',
        caption: 'Slide 7',
        image: "carousel-img.jpg"
    },
    {
        id: 8,
        altText: 'Slide 8',
        caption: 'Slide 8',
        image: "carousel-img1.jpg"
    },
    {
        id: 9,
        altText: 'Slide 9',
        caption: 'Slide 9',
        image: "carousel-img2.jpg"
    },
    {
        id: 10,
        altText: 'Slide 10',
        caption: 'Slide 10',
        image: "carousel-img3.jpg"
    },
    {
        id: 11,
        altText: 'Slide 11',
        caption: 'Slide 11',
        image: "carousel-img4.jpg"
    },
    {
        id: 12,
        altText: 'Slide 12',
        caption: 'Slide 12',
        image: "carousel-img5.jpg"
    }
];

const CarouselInHeader = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img src={item.image} alt="" className="w-100"/>
                {/*<CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />*/}
            </CarouselItem>
        );
    });

    return (
        <div>
            <Carousel activeIndex={activeIndex} next={next} previous={previous} className="mt-3">
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} className="prev-icon"/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} className="next-icon" />
            </Carousel>
            <div className="container">
                <div className="row py-2">
                    <div className="col-1">
                        <div className="card border-0">
                            <div className="round" onMouseEnter={() => goToIndex(0)}></div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="card border-0">
                            <div className="round" onMouseEnter={() => goToIndex(1)}></div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="card border-0">
                            <div className="round" onMouseEnter={() => goToIndex(2)}></div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="card border-0">
                            <div className="round" onMouseEnter={() => goToIndex(3)}></div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="card border-0">
                            <div className="round" onMouseEnter={() => goToIndex(4)}></div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="card border-0">
                            <div className="round" onMouseEnter={() => goToIndex(5)}></div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="card border-0">
                            <div className="round" onMouseEnter={() => goToIndex(6)}></div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="card border-0">
                            <div className="round" onMouseEnter={() => goToIndex(7)}></div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="card border-0">
                            <div className="round" onMouseEnter={() => goToIndex(8)}></div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="card border-0">
                            <div className="round" onMouseEnter={() => goToIndex(9)}></div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="card border-0">
                            <div className="round" onMouseEnter={() => goToIndex(10)}></div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="card border-0">
                            <div className="round" ></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default CarouselInHeader;