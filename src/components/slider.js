import React, { Component } from 'react';
import Slider from 'react-slick';
import PeaceofMind from '../assets/peaceOfMindv2.png';
import RecipeIO from '../assets/recipeIOcard.png';
import Gifter from '../assets/gifter.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/slider.css';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div className="sliderWrapper">
        <Slider {...settings}>
          <div className="workCard">
            <h1 id="workHeader">Peace of Mind V2</h1>
            <div className="imageContainer">
              <a
                href="https://peaceofmindtwo.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                className="workLinksWrapper"
              >
                <img
                  className="workImages"
                  alt="recipeIO"
                  src={PeaceofMind}
                ></img>
              </a>
            </div>
          </div>
          <div className="workCard">
            <h1 id="workHeader">RecipeIO</h1>
            <div className="imageContainer">
              <a
                href="https://recipeio-project2.herokuapp.com/login"
                target="_blank"
                rel="noreferrer"
                className="workLinksWrapper"
              >
                <img className="workImages" alt="recipeIO" src={RecipeIO}></img>
              </a>
            </div>
          </div>
          <div className="workCard">
            <h1 id="workHeader">Gifter</h1>
            <div className="imageContainer">
              <a
                href="https://mygifter.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                className="workLinksWrapper"
              >
                <img className="workImages" alt="recipeIO" src={Gifter}></img>
              </a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
