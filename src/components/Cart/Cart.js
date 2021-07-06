import React, {useContext} from "react";
import {CartContext} from "../CartContext/CartContext";
import Paper from "@material-ui/core/Paper";
import {CircularProgress, Grid, makeStyles} from "@material-ui/core";
import {cartStyles} from "./CartStyles";
import {useHistory} from "react-router-dom"


const useStyles = makeStyles((theme) => cartStyles(theme));

export const Cart = () => {
    const cartClasses = useStyles();
    const {cartContent, totalAmount, removeItem} = useContext(CartContext);
    const history = useHistory();

    const handleDeleteItem = (e) => {
        removeItem(parseInt(e.target.value));
    }
    const handleHome =() => {
        history.push("/");
    }

    const userCart = cartContent.map(entry => (
        <Grid item xs={12} key={entry.item.id}>
            <Paper className={cartClasses.paper}>
                <div>
                    <ul className={cartClasses.items}>
                        <li><label>{entry.item.title}</label></li>
                        <li><label>{entry.quantity}</label></li>
                        <li><label>${entry.item.price}</label></li>
                        <li>
                            <button value={entry.item.id} onClick={(e) => {
                                handleDeleteItem(e)
                            }}>Eliminar
                            </button>
                        </li>
                    </ul>
                </div>
            </Paper>
        </Grid>
    ));

    const FormRow = () => {
        return (
            <React.Fragment>
                {cartContent.length > 0 ? userCart : <CircularProgress size={20}/>}
            </React.Fragment>
        )
    }

    return (
        (userCart.length > 0) ?
            (<div>
                <ul className={cartClasses.items}>
                    <li><label>Item</label></li>
                    <li><label>Cantidad</label></li>
                    <li><label>Precio</label></li>
                    <li><label></label></li>
                </ul>
                <Grid container item xs={12} spacing={1}>
                    <FormRow/>
                </Grid>
                <div>
                    <ul className={cartClasses.items}>
                        <li><label>Total : </label></li>
                        <li><label></label></li>
                        <li><label>${totalAmount}</label></li>
                        <li><label></label></li>
                    </ul>
                </div>
            </div>) : (<div className={cartClasses.emptyCart}><label>Tu carrito esta vacio</label>
            <button onClick={handleHome}>Volver</button>
            </div>)
    )
}
