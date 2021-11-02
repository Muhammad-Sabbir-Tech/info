import React from 'react';
import blogImage from '../../Asset/Css/assets/images/blog/inner/1.jpg'
import {Col, Container, Row} from "react-bootstrap";
import AOS from "aos";

function BlogComponent(props) {
    AOS.init()
    return (
        <>
            <div id="blog" className="rs-blog pt-50 pb-50 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="sec-title6  mb-30" data-aos="fade-up" data-aos-duration="600">
                        <div className="sub-text text-center mb-0">Blog</div>
                        <h2 className="title  text-center">
                            Latest Tips &Tricks
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
                    <div className="rs-carousel owl-carousel" >
                        <Container>
                            <Row>
                               <Col lg={4} md={4} sm={6} xs={12} data-aos="zoom-in" data-aos-duration="800">
                                   <div className="blog-item">
                                       <div className="image-wrap">
                                           <img src={blogImage} alt="" />
                                       </div>
                                       <div className="blog-content">
                                           <ul className="blog-meta">
                                               <li className="date"><i className="fa fa-calendar-check-o" /> 16 Nov 2020</li>
                                               <li className="admin"><i className="fa fa-user-o" /> admin</li>
                                           </ul>
                                           <h3 className="blog-title"><a href="#">Necessity May Give Us Your Best Virtual Court System</a></h3>
                                           <p className="desc">We denounce with righteous indige nation and dislike men who are so beguiled...</p>
                                           <div className="blog-button"><a href="#">Learn More</a></div>
                                       </div>
                                   </div>
                               </Col>
                                <Col lg={4} md={4} sm={6} xs={12} data-aos="zoom-in" data-aos-duration="800">
                                    <div className="blog-item">
                                        <div className="image-wrap">
                                            <img src={blogImage} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <ul className="blog-meta">
                                                <li className="date"><i className="fa fa-calendar-check-o" /> 16 Nov 2020</li>
                                                <li className="admin"><i className="fa fa-user-o" /> admin</li>
                                            </ul>
                                            <h3 className="blog-title"><a href="#">Necessity May Give Us Your Best Virtual Court System</a></h3>
                                            <p className="desc">We denounce with righteous indige nation and dislike men who are so beguiled...</p>
                                            <div className="blog-button"><a href="#">Learn More</a></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={6} xs={12} data-aos="zoom-in" data-aos-duration="800">
                                    <div className="blog-item">
                                        <div className="image-wrap">
                                            <img src={blogImage} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <ul className="blog-meta">
                                                <li className="date"><i className="fa fa-calendar-check-o" /> 16 Nov 2020</li>
                                                <li className="admin"><i className="fa fa-user-o" /> admin</li>
                                            </ul>
                                            <h3 className="blog-title"><a href="#">Necessity May Give Us Your Best Virtual Court System</a></h3>
                                            <p className="desc">We denounce with righteous indige nation and dislike men who are so beguiled...</p>
                                            <div className="blog-button"><a href="#">Learn More</a></div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogComponent;