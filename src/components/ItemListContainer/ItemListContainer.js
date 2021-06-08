import React from "react";
import {makeStyles} from "@material-ui/core";
import {itemListCointainerStyle} from "./ItemListCointainerStyle";
const useStyles = makeStyles((theme) => itemListCointainerStyle(theme));

export const ItemListContainer = () => {
    const classes = useStyles();
    const greeting = "PROXIMAMENTE"
    return<div className={classes.container}>{greeting}</div>
}
