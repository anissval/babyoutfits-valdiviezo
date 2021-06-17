import React from "react";
import {ItemCount} from "../ItemCount/ItemCount";
import {makeStyles} from "@material-ui/core/styles";
import {itemStyles} from "./ItemStyle";
const useStyles = makeStyles((theme) => itemStyles(theme));

export const Item = ({id, productDescription,title, price, pictureUrl}) => {

    const classes = useStyles()
    return (<div className={classes.container}>
        <img alt={'imagen del producto'} src={pictureUrl} key={id} className={classes.imageStyle}/>
        <h5>{title}</h5>
        <h5>{price}</h5>
        <ItemCount stock={25} initial={0}/>
    </div>)
}
