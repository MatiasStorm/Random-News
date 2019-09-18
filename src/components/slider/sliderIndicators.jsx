import React from 'react';

const SliderIndicators = (props) => {

    return (
        <ol className="carousel-indicators">
            {[...Array(props.numberOfSlides)].map((e, index) =>
                <li key={index} className={activeSlide(props.activeSlideIndex, index)}
                ></li>
            )}
        </ol>
    );
}

function activeSlide(activeSlideIndex, index) {
    if (index === activeSlideIndex) return "active";
    return "";
}

export default SliderIndicators;

// className={(props, index) => { return "active" ? index === props.activeSlideIndex : ""; }}