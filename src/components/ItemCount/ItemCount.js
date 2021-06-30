import React, {useContext, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core";
import {itemCountStyle} from "./ItemCountStyle";
import {CartContext} from "../CartContext/CartContext";

const useStyles = makeStyles((theme) => itemCountStyle(theme));
export const ItemCount = ({stock, onAddToCard, initial}) => {
    const itemCountClass = useStyles();
    let [_stock, setStock] = useState(stock);
    const [quantity, setQuantity] = useState(0);
    let [_stockAvailable, setStockAvailable] = useState(true);

    const validateStock = () => {
        if (_stock !== 0 && quantity <= _stock) {
            setStockAvailable(true);
        } else {
            setStockAvailable(false);
        }
    }

    useEffect(() => {
        validateStock();
    }, [_stock]);

    const addItem = () => {
        if (quantity < _stock) {
            setQuantity(quantity + 1);
        }
    }

    const removeItem = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    const onAddToCartAndUpdateStock = (e) => {
        let updatedStock = (_stock - quantity);
        setStock(updatedStock);
        setQuantity(0);
        onAddToCard(e);
    }

    return (
        <div>
            <div className={itemCountClass.divExternalStyle}>
                <div className={itemCountClass.counterContainer}>
                    <button disabled={quantity === 0} onClick={_stock !== 0 ? () => removeItem() : undefined}>-
                    </button>
                    <div className={itemCountClass.quantity}><label>{quantity}</label>
                    </div>
                    <button disabled={(quantity === _stock)}
                            onClick={quantity <= _stock ? () => addItem() : undefined}>+
                    </button>
                </div>
                <button value={quantity} disabled={!_stockAvailable || quantity === 0}
                        onClick={(_stockAvailable && quantity !== 0) ? onAddToCartAndUpdateStock : undefined}>Agregar
                    al
                    carrito
                </button>
            </div>
        </div>
    )
}
