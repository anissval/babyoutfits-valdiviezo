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

    const onAddToCart = (selectedQuantity) => {
        addItem(product, selectedQuantity);
        setShowCheckoutButtons(true);
    }

    const handleCancel = () => {
        setShowCheckoutButtons(false);
    }
    const handleOnclick = () => {
        calculateTotalAmount();
        history.push("/Cart");
    }

    const groupButtons = () => {
        return (
            <div>
                <ul>
                    <li style={{listStyle: 'none'}}>
                        <Button variant="outlined" size="large" color="primary" className={classes.margin} onClick={() => {
                            handleOnclick()
                        }}>
                            TERMINAR MI COMPRA
                        </Button>
                    </li>
                    <li style={{listStyle: 'none'}}>
                        <Button variant="outlined" size="large" color="primary" onClick={() => {
                            handleCancel()
                        }}>
                            CANCELAR
                        </Button>

                    </li>
                </ul>

            </div>
        )
    }
    return (
        <Paper className={classes.paper} variant="outlined" elevation={3}>
            <div className={classes.container}>
                <img alt={'imagen del producto'} src={product.pictureUrl} key={product.id}
                     className={classes.image}/>
                <div className={classes.itemDescription}>
                    <label>{product.title}</label>
                    <label>{product.description}</label>
                    <label>${product.price}</label>
                </div>
                {
                    showCheckoutButtons ? groupButtons() : <CustumizedComponent stock={product.stock}
                                                                                onAddToCart={onAddToCart} initial={0}/>
                }

            </div>
        </Paper>
    )
}
