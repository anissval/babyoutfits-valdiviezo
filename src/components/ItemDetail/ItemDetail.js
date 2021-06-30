import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {itemDetailStyles} from "./ItemDetailStyles";
import {Button, Paper} from "@material-ui/core";
import {Link} from "react-router-dom";
import {CartContext} from "../CartContext/CartContext";

const useStyles = makeStyles((theme) => itemDetailStyles(theme));


export const ItemDetail = ({product, component: CustumizedComponent}) => {
    const {cartContent, addItem, removeItem, clear, isInCar} = useContext(CartContext);
    const {itemQuantity} = useContext(CartContext);
    const [showCheckoutButtons, setShowCheckoutButtons] = useState(false);
    const classes = useStyles();

    const onAddToCard = (e) => {
        addItem(product, e.target.value);
        setShowCheckoutButtons(true);
    }

    const handleCancel = () => {
        setShowCheckoutButtons(false);
    }

    const groupButtons = () => {
        return (
            <div>
                <ul>
                    <li style={{listStyle: 'none'}}><Button><Link to={'/Cart'}
                                                                  style={{textDecoration: 'none', color: 'black'}}>TERMINAR
                        MI COMPRA</Link></Button></li>
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
                    <h4>{product.price}</h4>
                </div>
                {
                    showCheckoutButtons ? groupButtons() : <CustumizedComponent stock={product.stock}
                                                                                onAddToCard={onAddToCard} initial={0}/>
                }

            </div>
        </Paper>
    )
}
