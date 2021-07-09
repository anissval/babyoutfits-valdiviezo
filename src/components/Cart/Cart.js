import React, {useContext, useEffect} from "react";
import {CartContext} from "../CartContext/CartContext";
import Paper from "@material-ui/core/Paper";
import {CircularProgress, Grid, IconButton, makeStyles} from "@material-ui/core";
import {cartStyles} from "./CartStyles";
import {useHistory} from "react-router-dom"
import {UserDataForm} from "../UserDataForm/UserDataForm";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => cartStyles(theme));

export const Cart = () => {
    const cartClasses = useStyles();
    const {cartContent, totalAmount, removeItem} = useContext(CartContext);
    const history = useHistory();

    useEffect(()=>{},[totalAmount,cartContent])

    const handleDeleteItem = (id) => {
        removeItem(id);
    }
    const handleHome = () => {
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
                            <IconButton aria-label="delete" className={cartClasses.margin}
                                        onClick={() => {
                                            handleDeleteItem(entry.item.id)
                                        }}>
                                <DeleteIcon/>
                            </IconButton>
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
            (<div className={cartClasses.container}>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={6}>
                            <Paper className={cartClasses.paper}>
                                <div>
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
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={cartClasses.paper}>
                                <UserDataForm/>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            ) : (
                <div className={cartClasses.emptyCart}><label> Tu carrito esta vacio </label>
                    <button onClick={handleHome}>Volver</button>
                </div>
            )
    )
}
