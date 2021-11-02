import React from 'react';
import AOS from 'aos';
import fixedServiceImage from '../../Asset/Css/assets/images/services/style1/1.png'

function FixedServiceComponent(props) {
    AOS.init()
    return (
        <>
            <div className="rs-services main-home style2 pt-20 pb-50 md-pt-80 md-pb-80">
                <div className="container">
                    {/*<div className="sec-title2 text-center mb-10">*/}
                    {/*    <span className="sub-text style-bg">Solutions</span>*/}
                    {/*    <h2 className="title title2">*/}
                    {/*        IT &amp; Technology Solutions Includes*/}
                    {/*    </h2>*/}
                    {/*</div>*/}
                    <div className="row">
                        <div className="col-lg-4 col-md-4 md-mb-30"  data-aos="zoom-in" data-aos-duration="800">
                            <div className="services-item">
                                <div className="services-icon">
                                    <div className="image-part">
                                        <img src={fixedServiceImage} alt="" />
                                    </div>
                                </div>
                                <div className="shape-part">
                                    <img className="move-y" src={fixedServiceImage} alt="" />
                                </div>
                                <div className="services-content">
                                    <div className="services-text">
                                        <h3 className="services-title"><a href="#">IT Management</a></h3>
                                    </div>
                                    <div className="services-desc">
                                        <p>
                                            Quisque placerat vitae lacus ut scelerisque fusce text used luctus odio ac nibh luctus, in porttitor data vitae.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 md-mb-30"  data-aos="zoom-in" data-aos-duration="800">
                            <div className="services-item">
                                <div className="services-icon">
                                    <div className="image-part">
                                        <img src={fixedServiceImage} alt="" />
                                    </div>
                                </div>
                                <div className="shape-part">
                                    <img className="move-y" src={fixedServiceImage} alt="" />
                                </div>
                                <div className="services-content">
                                    <div className="services-text">
                                        <h3 className="services-title"><a href="#">IT Management</a></h3>
                                    </div>
                                    <div className="services-desc">
                                        <p>
                                            Quisque placerat vitae lacus ut scelerisque fusce text used luctus odio ac nibh luctus, in porttitor data vitae.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 md-mb-30"  data-aos="zoom-in" data-aos-duration="800">
                            <div className="services-item">
                                <div className="services-icon">
                                    <div className="image-part">
                                        <img src={fixedServiceImage} alt="" />
                                    </div>
                                </div>
                                <div className="shape-part">
                                    <img className="move-y" src={fixedServiceImage} alt="" />
                                </div>
                                <div className="services-content">
                                    <div className="services-text">
                                        <h3 className="services-title"><a href="#">IT Management</a></h3>
                                    </div>
                                    <div className="services-desc">
                                        <p>
                                            Quisque placerat vitae lacus ut scelerisque fusce text used luctus odio ac nibh luctus, in porttitor data vitae.
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

export default FixedServiceComponent;