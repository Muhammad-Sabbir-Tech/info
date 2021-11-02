import React from 'react';
import serviceImage from '../../Asset/Css/assets/images/services/style6/1.png'
import AOS from "aos";

function ServiceComponent(props) {
    AOS.init()
    return (
        <>
            <div id="service" className="rs-services main-home style3 bg13 pt-50 pb-50 md-pt-80 md-pb-80">
                <div className="container pt-relative">
                    <div className="sec-title6  mb-30" data-aos="fade-up" data-aos-duration="600">
                        <div className="sub-text text-center mb-0">Service</div>
                        <h2 className="title  text-center">
                            Our Featured Service
                        </h2>
                        <div className="subTitle mx-lg-5 mx-md-5 text-center ">
                            <p className=" mx-lg-5 mx-md-5 text-center ">
                                Perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                    <div className="sec-left">
                        {/*<h2 className="title wow fadeInDown">Our Featured Services</h2>*/}
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-25" data-aos="zoom-in" data-aos-duration="800">
                            <div className="services-item" >
                                <div className="services-icon">
                                    <div className="image-part">
                                        <img src={serviceImage} alt="" />
                                    </div>
                                </div>
                                <div className="services-content">
                                    <div className="services-text">
                                        <h3 className="services-title"><a href="#">Computer Repair</a></h3>
                                    </div>
                                    <div className="services-desc">
                                        <p>
                                            At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-25" data-aos="zoom-in" data-aos-duration="800">
                            <div className="services-item" >
                                <div className="services-icon">
                                    <div className="image-part">
                                        <img src={serviceImage} alt="" />
                                    </div>
                                </div>
                                <div className="services-content">
                                    <div className="services-text">
                                        <h3 className="services-title"><a href="#">Computer Repair</a></h3>
                                    </div>
                                    <div className="services-desc">
                                        <p>
                                            At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-25" data-aos="zoom-in" data-aos-duration="800">
                            <div className="services-item" >
                                <div className="services-icon">
                                    <div className="image-part">
                                        <img src={serviceImage} alt="" />
                                    </div>
                                </div>
                                <div className="services-content">
                                    <div className="services-text">
                                        <h3 className="services-title"><a href="#">Computer Repair</a></h3>
                                    </div>
                                    <div className="services-desc">
                                        <p>
                                            At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceComponent;