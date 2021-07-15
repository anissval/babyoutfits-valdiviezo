import React, {useContext} from "react";
import {CartContext} from "../CartContext/CartContext";

export const UserDataConfirmed = () => {
    const {userInfo} = useContext(CartContext);

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
