import React from 'react';
import aboutImage from '../../Asset/Css/assets/images/about/style3/brand-visual.png'
import AOS from "aos";

function AboutComponent(props) {
    AOS.init()
    return (
        <>
            <div id="about" className="rs-slider style3 gray-bg2 pt-50 pb-50 md-pt-80 md-pb-0">
                <div className="container">
                    <div className="sec-title2 text-center mb-50">
                        <div className="sec-title6  mb-30" data-aos="fade-up" data-aos-duration="600">
                            <div className="sub-text text-center mb-0">About</div>
                            <h2 className="title  text-center">
                                 Pillars Of My Strategy
                            </h2>
                            <div className="subTitle mx-lg-5 mx-md-5 text-center ">
                                <p className=" mx-lg-5 mx-md-5 text-center ">
                                    Perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rs-carousel owl-carousel" >
                        <div className="row align-items-center">
                            <div className="col-lg-5 md-mb-50" data-aos="fade-right" data-aos-duration="800">
                                <div className="image-part">
                                    <img src={aboutImage} alt="" />
                                </div>
                            </div>

                            <div className="col-lg-7 pl-50 md-pl-15" data-aos="fade-left" data-aos-duration="800">
                                <div className="col-lg-12  md-pl-15 md-pt-60">
                                    <div className="sec-title6 mb-30">
                                        <h2 className="title text-dark testi-title">
                                            What's so Special About Braintech
                                        </h2>
                                        <div className="desc">
                                            Bring to the table win-win survival strategies to ensure dotted proactive domination. At the end of the day, going forward, a new normal that has evolved
                                        </div>
                                    </div>
                                    {/* Skillbar Section Start */}
                                    <div className="rs-skillbar style1 modify3">
                                        <div className="cl-skill-bar">
                                            {/* Start Skill Bar */}
                                            <span className="skillbar-title">Html</span>
                                            <div className="skillbar mt-0 mb-1" data-percent={92}>
                                                <p className="skillbar-bar" />
                                                <span className="skill-bar-percent" />
                                            </div>
                                            <span className="skillbar-title">Css</span>
                                            <div className="skillbar mt-0 mb-1" data-percent={92}>
                                                <p className="skillbar-bar" />
                                                <span className="skill-bar-percent" />
                                            </div>
                                            <span className="skillbar-title">Bootstrap</span>
                                            <div className="skillbar mt-0 mb-1" data-percent={92}>
                                                <p className="skillbar-bar" />
                                                <span className="skill-bar-percent" />
                                            </div>
                                            <span className="skillbar-title">Javascript</span>
                                            <div className="skillbar mt-0 mb-1" data-percent={92}>
                                                <p className="skillbar-bar" />
                                                <span className="skill-bar-percent" />
                                            </div>
                                            <span className="skillbar-title ">React</span>
                                            <div className="skillbar mt-0 mb-1" data-percent={92}>
                                                <p className=" skillbar-bar" />
                                                <span className="skill-bar-percent" />
                                            </div>
                                            <span className="skillbar-title">Php</span>
                                            <div className="skillbar mt-0 mb-1" data-percent={92}>
                                                <p className="skillbar-bar" />
                                                <span className="skill-bar-percent" />
                                            </div>
                                            <span className="skillbar-title">Laravel</span>
                                            <div className="skillbar mt-0 mb-1" data-percent={92}>
                                                <p className="skillbar-bar" />
                                                <span className="skill-bar-percent" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Skillbar Section End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutComponent;