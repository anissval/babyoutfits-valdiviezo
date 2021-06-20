import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {itemDetailStyles} from "./ItemDetailStyles";
import {Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => itemDetailStyles(theme));


export const ItemDetail = ({id, title, description, price, pictureUrl}) => {

    const classes = useStyles()

    return (
        <Paper className={classes.paper}>
            <div className={classes.container}>
                <img alt={'imagen del producto'} src={pictureUrl} key={id} className={classes.imageStyle}/>
                <div className={classes.itemDescription}>
                    <h3>{title}</h3>
                    {description}
                    <h4>{price}</h4>
                </div>
            </div>
        </Paper>)
}
