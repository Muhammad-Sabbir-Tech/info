import React from 'react';
import {Route} from "react-router";
import HomePage from "../Pages/HomePage";

function AppRote(props) {
    return (
        <>
            <Route path="/" component={HomePage}/>
        </>
    );
}

export default AppRote;