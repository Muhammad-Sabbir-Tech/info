import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Asset/Css/CustomCss.css'
import {HashRouter} from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App(props) {
    return (
        <>
            <HashRouter>
                <HomePage/>
            </HashRouter>
        </>
    );
}

export default App;