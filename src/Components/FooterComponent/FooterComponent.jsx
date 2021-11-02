import React from 'react';
import footerLogo from '../../Asset/images/My logo/logo-dark.svg'
import AOS from "aos";

function FooterComponent(props) {
    AOS.init()
    return (
        <>
            <footer id="rs-footer" className="rs-footer style3">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12 footer-widget" data-aos="zoom-in" data-aos-duration="800">
                                <div className="footer-logo mb-30">
                                    <a href="index.html"><img src={footerLogo} alt="" /></a>
                                </div>
                                <div className="textwidget pb-30"><p>Sedut perspiciatis unde omnis iste natus error sitlutem acc usantium doloremque denounce with illo inventore veritatis</p>
                                </div>
                                <ul className="footer-social md-mb-30">
                                    <li>
                                        <a href="#" target="_blank"><span><i className="fa fa-facebook" /></span></a>
                                    </li>
                                    <li>
                                        <a href="# " target="_blank"><span><i className="fa fa-twitter" /></span></a>
                                    </li>
                                    <li>
                                        <a href="# " target="_blank"><span><i className="fa fa-pinterest-p" /></span></a>
                                    </li>
                                    <li>
                                        <a href="# " target="_blank"><span><i className="fa fa-instagram" /></span></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30" data-aos="zoom-in" data-aos-duration="800">
                                <h3 className="widget-title">IT Services</h3>
                                <ul className="site-map">
                                    <li><a href="#">Software Development</a></li>
                                    <li><a href="#">Software Development</a></li>
                                    <li><a href="#">Software Development</a></li>
                                    <li><a href="#">Software Development</a></li>
                                    <li><a href="#">Software Development</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 md-mb-30" data-aos="zoom-in" data-aos-duration="800">
                                <h3 className="widget-title">Contact Info</h3>
                                <ul className="address-widget">
                                    <li>
                                        <i className="flaticon-location" />
                                        <div className="desc">374 FA Tower, William S Blvd 2721, IL, USA</div>
                                    </li>
                                    <li>
                                        <i className="flaticon-call" />
                                        <div className="desc">
                                            <a href="tel:(+880)155-69569">(+880)155-69569</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="flaticon-email" />
                                        <div className="desc">
                                            <a href="mailto:support@rstheme.com">support@rstheme.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="flaticon-clock-1" />
                                        <div className="desc">
                                            Opening Hours: 10:00 - 18:00
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12" data-aos="zoom-in" data-aos-duration="800">
                                <h3 className="widget-title mb-0">ShortCut</h3>
                                <div className="footer-bottom pt-0 bg-transparent">
                                        <div className="row ">
                                            <div className="col-lg-6 text-left md-mb-10 order-last">
                                                <ul className="copy-right-menu text-left">
                                                    <li className="d-none"><a href="#">Home</a></li><br/>
                                                    <li><a href="#">Home</a></li><br/>
                                                    <li><a href="#">About</a></li><br/>
                                                    <li><a href="#">Service</a></li><br/>
                                                    <li><a href="#">Portfolio</a></li><br/>
                                                    <li><a href="#">Blog</a></li><br/>
                                                    <li><a href="#">Contact</a></li><br/>
                                                </ul>
                                            </div>

                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom" >
                    <div className="container">
                        <div className="row y-middle">
                            <div className="col-lg-6">
                                <div className="copyright">
                                    <p>© 2021 All Rights Reserved. Developed By sabirinfo.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FooterComponent;