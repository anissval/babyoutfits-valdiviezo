import React from "react";
import {NavBar} from "./components/NavBar/NavBar";
import {makeStyles} from "@material-ui/core";
import {appStyles} from "./AppStyles";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/Navigation/AppRouter";

const useStyles = makeStyles((theme) => appStyles(theme));

export const App = () => {
    const appClasses = useStyles();
    return <div className={appClasses.container}>
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    </div>
}
