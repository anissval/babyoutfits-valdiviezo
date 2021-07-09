import React, {useContext} from "react";
import {CartContext} from "../CartContext/CartContext";
import {makeStyles} from "@material-ui/core";
import {userDataConfirmedStyles} from "./UserDataConfirmedStyles";

const useStyles = makeStyles((theme) => userDataConfirmedStyles(theme));

export const UserDataConfirmed = () => {
    const {confirmUserOrderData, userInfo} = useContext(CartContext);

    return (
        <form>
            <h1>Informacion del usuario</h1>
            <p>
                <label>
                    Nombre : {userInfo.name}
                </label>
            </p>
            <p>
                <label>
                    Telefono : {userInfo.phone}
                </label>
            </p>
            <p><label>
                Mail : {userInfo.email}
            </label>
            </p>
        </form>
    )
}
