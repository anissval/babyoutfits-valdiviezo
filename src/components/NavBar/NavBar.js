import React from "react";
import {CartWidget} from "../CartWidget/CartWidget";
import {makeStyles} from "@material-ui/core";
import {navBarStyle} from "./NavBarStyle";

const useStyles = makeStyles((theme) => navBarStyle(theme));

export const NavBar = () => {
    const navBarClass = useStyles();
    return <div>
        <nav>
            <ul className= {navBarClass.container}>
                <li><a href="#">Baby Outfits</a></li>
                <li><a href="#">Bodies</a></li>
                <li><a href="#">Abrigos</a></li>
                <li><a href="#">Accesorios</a></li>
                <li><a href="#"><CartWidget></CartWidget></a></li>
            </ul>
        </nav>
    </div>
}
