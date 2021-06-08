import React from "react";
import {Badge, makeStyles} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {cartWidgetStyle} from "./CartWidgetStyle";

const useStyles = makeStyles((theme) => cartWidgetStyle(theme));

export const CartWidget = () => {
    const cardWidgetclass = useStyles();
    return <div className={cardWidgetclass.container}>
        <Badge badgeContent={5} color="primary">
            <ShoppingCartIcon />
        </Badge>
    </div>
}
