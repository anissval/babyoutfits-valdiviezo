import React, {useContext} from "react";
import {Badge, makeStyles} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {cartWidgetStyle} from "./CartWidgetStyle";
import {CartContext} from "../CartContext/CartContext";

const useStyles = makeStyles((theme) => cartWidgetStyle(theme));

export const CartWidget = () => {
    const {totalItemsIntoCart} = useContext(CartContext);
    const cardWidgetclass = useStyles();
    return <div className={cardWidgetclass.container}>
        <Badge badgeContent={totalItemsIntoCart} color="primary">
            <ShoppingCartIcon />
        </Badge>
    </div>
}
