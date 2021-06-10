import React from "react";
import {makeStyles} from "@material-ui/core";
import {itemListCointainerStyle} from "./ItemListCointainerStyle";
import {ItemCount} from "../ItemCount/ItemCount";
const useStyles = makeStyles((theme) => itemListCointainerStyle(theme));

export const ItemListContainer = (props) => {
    const classes = useStyles();
    const {greeting}= props;
    return<div className={classes.container}>
        <h1>{greeting}</h1>
        <ItemCount stock={25} initial={0}></ItemCount>
    </div>
}
