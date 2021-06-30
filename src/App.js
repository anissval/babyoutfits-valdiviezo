import React from "react";
import {NavBar} from "./components/NavBar/NavBar";
import {makeStyles} from "@material-ui/core";
import {appStyles} from "./AppStyles";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/Navigation/AppRouter";
import {CartProvider} from "./components/CartContext/CartContext";

const useStyles = makeStyles((theme) => appStyles(theme));

export const App = () => {
    const appClasses = useStyles();
    return (<CartProvider>
        <div className={appClasses.container}>
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
        </div>
    </CartProvider>)

}
