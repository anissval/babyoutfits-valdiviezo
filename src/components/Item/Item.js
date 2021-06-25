import React from "react";
import {ItemCount} from "../ItemCount/ItemCount";
import {makeStyles} from "@material-ui/core/styles";
import {itemStyles} from "./ItemStyle";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => itemStyles(theme));

export const Item = ({product}) => {

    const classes = useStyles()
    return (<div className={classes.container}>
        <Link to={{pathname: `/item/${product.id}`}}><img alt={'imagen del producto'} src={product.pictureUrl} key={product.id}
                                                  className={classes.imageStyle}/></Link>
        <label>{product.title}</label>
        <label>{product.price}</label>
        <ItemCount stock={product.stock} initial={0}/>
    </div>)
}
