import React, { Component } from 'react';
import Slide from './slide.jsx';
import SliderArrows from "./sliderArrows.jsx";
import SliderIndicators from './sliderIndicators.jsx';
import { SLIDER } from '../../settings.js';

class Slider extends Component {
    numberOfSlides = 5
    state = {
        imageWidth: 2000,
        imageHeight: 1000,
        currentIndex: 0,
        translateValue: 0
    }

    render() {
        return (
            <React.Fragment>
                <div id="home" className="overflow-hidden h-100">

                    <SliderArrows
                        prevSlide={this.goToPrevSlide}
                        nextSlide={this.goToNextSlide}
                    />

                    <div className="slide-container" style={{
                        transform: `translateX(${this.state.translateValue}px)`
                    }}>
                        {[...Array(SLIDER.numberOfSlides)].map((e, index) =>
                            <Slide
                                key={index}
                                imageHeight={SLIDER.imageHeight}
                                imageWidth={SLIDER.imageWidth}
                            />
                        )}
                    </div>

                    <SliderIndicators
                        numberOfSlides={SLIDER.numberOfSlides}
                        activeSlideIndex={this.state.currentIndex}
                    />




                </div>
            </React.Fragment>
        );
    }

    goToPrevSlide = () => {
        if (this.state.currentIndex !== 0) {
            this.setState(oldState => ({
                currentIndex: oldState.currentIndex - 1,
                translateValue: oldState.translateValue + this.slideWidth()
            }))
        }
    }

    goToNextSlide = () => {
        if (this.state.currentIndex === this.numberOfSlides - 1) {
            this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        else {
            this.setState(oldState => ({
                currentIndex: oldState.currentIndex + 1,
                translateValue: oldState.translateValue + -(this.slideWidth())
            }));
        }
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    componentDidMount() {
        window.addEventListener("resize", this.reRender)
        setInterval(this.goToNextSlide, 5000);
    }

    reRender = () => {
        this.setState({
            currentIndex: 0,
            translateValue: 0
        })
        this.render();
    }


}

export default Slider;