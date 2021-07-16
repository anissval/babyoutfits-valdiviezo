import React, {useContext, useState} from "react";
import {Button, makeStyles} from "@material-ui/core";
import {userDataFormStyles} from "./UserDataFormStyles";
import {CartContext} from "../CartContext/CartContext";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => userDataFormStyles(theme));

export const UserDataForm = () => {
    const userDataFormClasses = useStyles();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const {confirmUserOrderData} = useContext(CartContext);
    const history = useHistory();

    const handleConfirmOrder = () => {
        confirmUserOrderData(name, phone, email);
        history.push("/OrderConfirmation");
    }
    const handleNameChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
    const handlePhoneChange = (e) => {
        e.preventDefault();
        setPhone(e.target.value);
    }
    const handleEMailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    return (
        <form>
            <h1>Informacion del usuario</h1>
            <p>
                <label>
                    Nombre :
                    <input type="text" name="name" value={name || ''} onChange={(event) => {
                        handleNameChange(event)
                    }}/>
                </label>
            </p>
            <p>
                <label>
                    Telefono :
                    <input type="text" name="phone" value={phone || ''} onChange={(event) => {
                        handlePhoneChange(event)
                    }}/>
                </label>
            </p>
            <p><label>
                Email :
                <input type="text" name="email" value={email || ''} onChange={(event) => {
                    handleEMailChange(event)
                }}/>
            </label>
            </p>
            <Button variant="outlined" size="large" color="primary" className={userDataFormClasses.margin}
                    onClick={() => {
                        handleConfirmOrder()
                    }}>
                CONFIRMAR COMPRA
            </Button>
        </form>
    )
}
