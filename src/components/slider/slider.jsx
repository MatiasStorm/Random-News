import React, { Component } from 'react';
import Slide from './slide.jsx';
import ImageUrlGenerator from '../../utilities/imageUrlGenerator.js';
import SliderArrows from "./sliderArrows.jsx";
import SliderIndicators from './sliderIndicators.jsx';
import { LoremIpsum } from "lorem-ipsum";

class Slider extends Component {

    // imgUrlGenerator = new ImageUrlGenerator;

    numberOfSlides = 5
    state = {
        imageWidth: 2000,
        imageHeight: 1000,
        // imageUrls: this.imgUrlGenerator.getUrls(this.numberOfSlides, this.width, this.height),
        currentIndex: 0,
        translateValue: 0
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

    render() {
        return (
            <React.Fragment>
                <div id="home" className="overflow-hidden">

                    <div className="slide-container" style={{
                        transform: `translateX(${this.state.translateValue}px)`
                    }}>
                        {[...Array(this.numberOfSlides)].map((e, index) =>
                            <Slide
                                key={index}
                                imageHeight={this.state.imageHeight}
                                imageWidth={this.state.imageWidth}
                            />
                        )}
                    </div>

                    <SliderIndicators
                        numberOfSlides={this.numberOfSlides}
                        activeSlideIndex={this.state.currentIndex}
                    />


                    <SliderArrows
                        prevSlide={this.goToPrevSlide}
                        nextSlide={this.goToNextSlide}
                    />

                </div>
            </React.Fragment>
        );
    }
}

export default Slider;