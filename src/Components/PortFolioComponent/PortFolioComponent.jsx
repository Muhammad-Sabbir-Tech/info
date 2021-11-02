import React from 'react';
import portFolioImage from '../../Asset/Css/assets/images/project/style2/1.jpg'
import AOS from "aos";

function PortFolioComponent(props) {
    AOS.init()
    return (
        <>
            <div id="portFolio" className="rs-project style4 gray-color pt-50 pb-50 md-pt-80 md-pb-80">
                <div className="container-fluid">
                    <div className="sec-title6  mb-30" data-aos="fade-up" data-aos-duration="600">
                        <div className="sub-text text-center mb-0">Projects</div>
                        <h2 className="title  text-center">
                            Our Recent Launched Projects
                        </h2>
                        <div className="subTitle mx-lg-5 mx-md-5 text-center ">
                            <p className=" mx-lg-5 mx-md-5 text-center ">
                                Perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-30" data-aos="zoom-in" data-aos-duration="800">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src={portFolioImage} alt="" />
                                </div>
                                <div className="project-content">
                                    <p className="category"><a href="#">Software</a></p>
                                    <h3 className="title"><a href="#">Product Engineering</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30" data-aos="zoom-in" data-aos-duration="800">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src={portFolioImage} alt="" />
                                </div>
                                <div className="project-content">
                                    <p className="category"><a href="#">Software</a></p>
                                    <h3 className="title"><a href="#">Product Engineering</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30" data-aos="zoom-in" data-aos-duration="800">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src={portFolioImage} alt="" />
                                </div>
                                <div className="project-content">
                                    <p className="category"><a href="#">Software</a></p>
                                    <h3 className="title"><a href="#">Product Engineering</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PortFolioComponent;