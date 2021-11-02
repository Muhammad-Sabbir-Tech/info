import React from 'react';
import HomeBanner from "../Components/HomeBanner/HomeBanner";
import TopNav from "../Components/NaVMenu/TopNav";
import FixedServiceComponent from "../Components/FixedServiceComponent/FixedServiceComponent";
import AboutComponent from "../Components/AboutComponent/AboutComponent";
import ServiceComponent from "../Components/ServiceComponent/ServiceComponent";
import PortFolioComponent from "../Components/PortFolioComponent/PortFolioComponent";
import ClientReviewComponent from "../Components/ClientReviewComponent/ClientReviewComponent";
import BlogComponent from "../Components/BlogComponent/BlogComponent";
import GetInTouchComponent from "../Components/GetInTouchComponent/GetInTouchComponent";
import FooterComponent from "../Components/FooterComponent/FooterComponent";

function HomePage(props) {
    return (
        <>
            <TopNav/>
            <HomeBanner/>
            <FixedServiceComponent/>
            <AboutComponent/>
            <ServiceComponent/>
            <PortFolioComponent/>
            <ClientReviewComponent/>
            <BlogComponent/>
            <GetInTouchComponent/>
            <FooterComponent/>
        </>
    );
}

export default HomePage;