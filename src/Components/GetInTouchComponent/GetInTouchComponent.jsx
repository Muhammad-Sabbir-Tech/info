import React from 'react';
import AOS from "aos";

function GetInTouchComponent(props) {
    AOS.init()
    return (
        <>
            <div className="getTouchContainer pt-30 pb-25">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7" data-aos="fade-right" data-aos-duration="800">
                            <div className="sec-title3 md-center md-mb-30">
                                <span className="sub-text style2">Get in touch</span>
                                <h2 className="title title2">Have a Project, Let's Start Today.</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 text-right md-center" data-aos="fade-left" data-aos-duration="800">
                            <div className="btn-part">
                                <a className="readon more-about" href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GetInTouchComponent;