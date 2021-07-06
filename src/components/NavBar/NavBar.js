import React, {useContext, useEffect} from "react";
import {makeStyles} from "@material-ui/core";
import {navBarStyle} from "./NavBarStyle";
import {Link} from "react-router-dom";
import {CartWidget} from "../CartWidget/CartWidget";
import {CartContext} from "../CartContext/CartContext";

const useStyles = makeStyles((theme) => navBarStyle(theme));

export const NavBar = () => {
    const {totalItemsIntoCart, calculateItemsIntoCart, cartContent} = useContext(CartContext);
    const navBarClass = useStyles();

    useEffect(() => {
        calculateItemsIntoCart();
    }, [cartContent])

    return (<div>
        <ul className={navBarClass.container}>
            <li className={navBarClass.home}><Link to="/">Baby Outfits</Link></li>
            <li><Link to={{pathname: '/category/Bodies'}}>Bodies</Link></li>
            <li><Link to={{pathname: '/category/Abrigos'}}>Abrigos</Link></li>
            {(totalItemsIntoCart > 0) && <li><CartWidget></CartWidget></li>}
        </ul>
    </div>)
}
