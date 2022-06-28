import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

export default class CustomArrows extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="carusel12">
                <Slider {...settings}>
                    <div>
                        <div className="corus_mg">
                            <h4>5.0</h4>
                            <div className="ert">
                            ⭐️⭐️⭐️⭐️⭐️
                              </div>
                            <h6 className="ere">We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand. </h6>
                        </div>
                    </div>
                    <div>
                     <div className="corus_mg">
                         <h4>5.0</h4>
                         <div className="ert">
                         ⭐️⭐️⭐️⭐️⭐️
                              </div>
                         <h6 className="ere">We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.
                         </h6>
                     </div>
                 </div>
                    <div>
                     
                     <div className="corus_mg">
                         <h4>5.0</h4>
                         <div className="ert">
                         ⭐️⭐️⭐️⭐️⭐️
                              </div>
                         <h6 className="ere">We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.
                         </h6>
                     </div>
                 </div>         
                </Slider> 
            </div>
        );
    }
}