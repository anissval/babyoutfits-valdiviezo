import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {itemDetailStyles} from "./ItemDetailStyles";
import {Button, Paper} from "@material-ui/core";
import {CartContext} from "../CartContext/CartContext";
import {useHistory} from "react-router-dom"

const useStyles = makeStyles((theme) => itemDetailStyles(theme));


export const ItemDetail = ({product, component: CustumizedComponent}) => {
    const {addItem, calculateTotalAmount} = useContext(CartContext);
    const [showCheckoutButtons, setShowCheckoutButtons] = useState(false);
    const history = useHistory();
    const classes = useStyles();

    const onAddToCard = (e) => {
        addItem(product, e.target.value);
        setShowCheckoutButtons(true);
    }

    const handleCancel = () => {
        setShowCheckoutButtons(false);
    }
    const handleOnclick = (e) => {
        calculateTotalAmount();
        history.push("/Cart");
    }

    const groupButtons = () => {
        return (
            <div>
                <ul>
                    <li style={{listStyle: 'none'}}><Button onClick={(e) => {
                        handleOnclick(e)
                    }}>TERMINAR
                        MI COMPRA</Button></li>
                    <li style={{listStyle: 'none'}}><Button onClick={handleCancel} style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>CANCELAR</Button></li>
                </ul>

            </div>
        )
    }
    return (
        <Paper className={classes.paper}>
            <div className={classes.container}>
                <img alt={'imagen del producto'} src={product.pictureUrl} key={product.id}
                     className={classes.imageStyle}/>
                <div className={classes.itemDescription}>
                    <h3>{product.title}</h3>
                    {product.description}
                    <h4>${product.price}</h4>
                </div>
                {
                    showCheckoutButtons ? groupButtons() : <CustumizedComponent stock={product.stock}
                                                                                onAddToCard={onAddToCard} initial={0}/>
                }

            </div>
        </Paper>
    )
}
