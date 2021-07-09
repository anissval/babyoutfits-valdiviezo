import React, {useContext, useEffect} from "react";
import {CartContext} from "../CartContext/CartContext";
import Paper from "@material-ui/core/Paper";
import {Button, CircularProgress, Grid, makeStyles} from "@material-ui/core";
import {useHistory} from "react-router-dom"
import {orderConfirmationStyle} from "./OrderConfirmationStyle";
import {UserDataConfirmed} from "../UserDataConfirmed/UserDataConfirmed";

const useStyles = makeStyles((theme) => orderConfirmationStyle(theme));

export const OrderConfirmation = () => {
    const orderConfirmationClasses = useStyles();
    const {totalAmount, orderID, confirmedItemsBought, clear} = useContext(CartContext);
    const history = useHistory();

    useEffect(() => {

    }, [orderID])

    const handleHome = () => {
        clear();
        history.push("/");
    }

    const userCart = confirmedItemsBought.map(entry => (
        <Grid item xs={12} key={entry.id}>
            <Paper className={orderConfirmationClasses.paper}>
                <div>
                    <ul className={orderConfirmationClasses.items}>
                        <li><label>{entry.title}</label></li>
                        <li><label>{entry.quantity}</label></li>
                        <li><label>${entry.price}</label></li>
                    </ul>
                </div>
            </Paper>
        </Grid>
    ));

    const FormRow = () => {
        return (
            <React.Fragment>
                {userCart.length > 0 ? userCart : <CircularProgress size={20}/>}
            </React.Fragment>
        )
    }

    return (
        (orderID) ?
            (<div className={orderConfirmationClasses.centerItems}><h1>Orden confirmada</h1>
                    <label>{`ID DE LA ORDEN DE COMPRA : ${orderID}`}</label>
                    <div className={orderConfirmationClasses.container}>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={6}>
                                <Paper className={orderConfirmationClasses.paper}>
                                    <div>
                                        <ul className={orderConfirmationClasses.items}>
                                            <li><label>Item</label></li>
                                            <li><label>Cantidad</label></li>
                                            <li><label>Precio</label></li>
                                            <li><label></label></li>
                                        </ul>
                                        <Grid container item xs={12} spacing={1}>
                                            <FormRow/>
                                        </Grid>
                                        <div>
                                            <ul className={orderConfirmationClasses.items}>
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
                                <Paper className={orderConfirmationClasses.paper}>
                                    <UserDataConfirmed/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <Button variant="outlined" size="large" color="primary" onClick={handleHome}>Volver al menu
                        principal</Button>
                </div>
            )
            : (
                <CircularProgress size={60}/>
            )
    )
}
