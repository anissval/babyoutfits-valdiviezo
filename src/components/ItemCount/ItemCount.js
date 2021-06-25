import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core";
import {itemCountStyle} from "./ItemCountStyle";

const useStyles = makeStyles((theme) => itemCountStyle(theme));
export const ItemCount = ({stock, onAddToCard, initial}) => {
    const itemCountClass = useStyles();
    let [_stock, setStock] = useState(stock);
    let [_itemQuantity, setItemQuantity] = useState(initial);
    let [_stockAvailable, setStockAvailable] = useState(true);

    const validateStock = () => {
        if (_stock !== 0 && _itemQuantity <= _stock) {
            setStockAvailable(true);
        } else {
            setStockAvailable(false);
        }
    }

    useEffect(() => {
        validateStock();
    }, [_stock]);

    const addItem = () => {
        if (_itemQuantity < _stock) {
            setItemQuantity(_itemQuantity + 1);
        }
    }

    const removeItem = () => {
        if (_itemQuantity > 0) {
            setItemQuantity(_itemQuantity - 1);
        }
    }

    const onAddToCartAndUpdateStock = () => {
        let updatedStock = (_stock - _itemQuantity);
        setStock(updatedStock);
        setItemQuantity(0);
        onAddToCard();
    }

    return (
        <div>
            <div className={itemCountClass.divExternalStyle}>
                <div className={itemCountClass.counterContainer}>
                    <button disabled={_itemQuantity === 0} onClick={_stock !== 0 ? () => removeItem() : undefined}>-
                    </button>
                    <div className={itemCountClass.quantity}><label>{_itemQuantity}</label>
                    </div>
                    <button disabled={(_itemQuantity === _stock)}
                            onClick={_itemQuantity <= _stock ? () => addItem() : undefined}>+
                    </button>
                </div>
                <button disabled={!_stockAvailable || _itemQuantity === 0}
                        onClick={(_stockAvailable && _itemQuantity !== 0) ? () => onAddToCartAndUpdateStock() : undefined}>Agregar
                    al
                    carrito
                </button>
            </div>
        </div>
    )
}
