import React from 'react';
import Slider from "react-slick";
import {Row, Col, Container} from "react-bootstrap";
import clientImage from '../../Asset/Css/assets/images/testimonial/style3/1.jpg'
import AOS from "aos";

function ClientReviewComponent(props) {
    AOS.init()
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
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
        <>
            <div className="rs-testimonial style9 gray-bg3 pt-50 pb-50 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="sec-title6  mb-30" data-aos="fade-up" data-aos-duration="600">
                        <div className="sub-text text-center mb-0">Testimonial</div>
                        <h2 className="title  text-center">
                            What customar saying
                        </h2>
                        <div>
                            <div className="subTitle mx-lg-5 mx-md-5 text-center ">
                                <p className=" mx-lg-5 mx-md-5 text-center ">
                                    Perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rs-carousel owl-carousel mt-5" >
                        <Container>
                            <Slider {...settings} >
                                <div>
                                    <div className="testi-item mx-2">
                                        <div className="testi-content">
                                            <div className="images-wrap">
                                                <img src={clientImage} alt="Images" />
                                            </div>
                                            <div className="testi-information">
                                                <div className="testi-name">Megan Fox</div>
                                                <span className="testi-title">CEO, Brick Consulting</span>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testi-item mx-2">
                                        <div className="testi-content">
                                            <div className="images-wrap">
                                                <img src={clientImage} alt="Images" />
                                            </div>
                                            <div className="testi-information">
                                                <div className="testi-name">Megan Fox</div>
                                                <span className="testi-title">CEO, Brick Consulting</span>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testi-item mx-2">
                                        <div className="testi-content">
                                            <div className="images-wrap">
                                                <img src={clientImage} alt="Images" />
                                            </div>
                                            <div className="testi-information">
                                                <div className="testi-name">Megan Fox</div>
                                                <span className="testi-title">CEO, Brick Consulting</span>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testi-item mx-2">
                                        <div className="testi-content">
                                            <div className="images-wrap">
                                                <img src={clientImage} alt="Images" />
                                            </div>
                                            <div className="testi-information">
                                                <div className="testi-name">Megan Fox</div>
                                                <span className="testi-title">CEO, Brick Consulting</span>
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</p>
                                        </div>
                                    </div>
                                </div>

                            </Slider>

                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClientReviewComponent;