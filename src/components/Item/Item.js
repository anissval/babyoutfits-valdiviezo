import React from "react";
import {ItemCount} from "../ItemCount/ItemCount";
import {makeStyles} from "@material-ui/core/styles";
import {itemStyles} from "./ItemStyle";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => itemStyles(theme));

export const Item = ({id, productDescription, title, price, pictureUrl}) => {

    const classes = useStyles()
    return (<div className={classes.container}>
        <Link to={{pathname: `/item/${id}`}}><img alt={'imagen del producto'} src={pictureUrl} key={id}
                                                  className={classes.imageStyle}/></Link>
        <label>{title}</label>
        <label>{price}</label>
        <ItemCount stock={25} initial={0}/>
    </div>)
}
