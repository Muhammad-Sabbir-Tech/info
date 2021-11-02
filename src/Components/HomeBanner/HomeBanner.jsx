import React, {useEffect, useState} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import homeBannerImage from '../../Asset/images/homeBanner.png'

function HomeBanner(props) {
    const [didViewCountUp, setDidViewCountUp] = useState(false)
    const onVisibilityChange = (isVisible) => {

        if (isVisible) {
            setDidViewCountUp(true)
        } else {
            setDidViewCountUp(false)
        }
    }
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        <>
            <div className="hero">
                <div className="map">
                    <img src={homeBannerImage} alt="Image" className="img-fluid"/>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <span className=" mb-0 bannerGreeting" >Hi, I am</span>
                            <h1 className="heading" >Muhammad Sabbir</h1>
                            <p className="lead" >Lorem ipsum dolor sit, amet
                                consectetur adipisicing, elit. Quia, obcaecati dolorem voluptatem ex, quos laboriosam
                                quas veniam voluptatum eum incidunt.</p>
                            <form action="#" className="form-search d-flex align-items-stretch mb-5" >
                                {/*<input type="text" className="form-control"*/}
                                {/*       placeholder="Your ZIP code or City. e.g. New York"/>*/}
                                {/*<button type="submit" className="btn btn-primary">Search</button>*/}
                            </form>
                            <div className="row section-counter">
                                <div className="col-6 col-sm-6 col-md-6 col-lg-3" >
                                    <div className="counter-wrap">
                                        <span className="number"><span className="countup">
                                            <VisibilitySensor
                                                scrollCheck={true}
                                                onChange={onVisibilityChange}
                                            >
                                        <CountUp start={0} end={didViewCountUp ? 2917 : 0} duration={5}/>
                                    </VisibilitySensor>
                                        </span></span>
                                        <span className="caption"># Happy clients</span>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-3" >
                                    <div className="counter-wrap">
                                        <span className="number"><span className="countup">
                                            <VisibilitySensor
                                                scrollCheck={true}
                                                onChange={onVisibilityChange}
                                            >
                                        <CountUp start={0} end={didViewCountUp ? 3918 : 0} duration={5}/>
                                    </VisibilitySensor>
                                        </span></span>
                                        <span className="caption"># Project done</span>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-3" >
                                    <div className="counter-wrap">
                                        <span className="number"><span className="countup">
                                            <VisibilitySensor
                                                scrollCheck={true}
                                                onChange={onVisibilityChange}
                                            >
                                        <CountUp start={0} end={didViewCountUp ? 38928 : 0} duration={5}/>
                                    </VisibilitySensor>
                                        </span></span>
                                        <span className="caption"># Have companies</span>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-3" >
                                    <div className="counter-wrap">
                                        <span className="number"><span className="countup">
                                            <VisibilitySensor
                                                scrollCheck={true}
                                                onChange={onVisibilityChange}
                                            >
                                        <CountUp start={0} end={didViewCountUp ? 7192 : 0} duration={5}/>
                                    </VisibilitySensor>
                                        </span></span>
                                        <span className="caption"># Team Members</span>
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

export default HomeBanner;