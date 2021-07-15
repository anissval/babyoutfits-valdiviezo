import React, {useEffect, useState} from "react";
import {Button, makeStyles} from "@material-ui/core";
import {itemCountStyle} from "./ItemCountStyle";

const useStyles = makeStyles((theme) => itemCountStyle(theme));
export const ItemCount = ({stock, onAddToCart, initial}) => {
    const itemCountClass = useStyles();
    let [_stock, setStock] = useState(stock);
    const [quantity, setQuantity] = useState(initial);
    let [_stockAvailable, setStockAvailable] = useState(true);

    useEffect(() => {
        const validateStock = () => {
            if (_stock !== 0 && quantity <= _stock) {
                setStockAvailable(true);
            } else {
                setStockAvailable(false);
            }
        }
        validateStock();
    }, [_stock, quantity]);

    const onAddItem = () => {
        if (quantity < _stock) {
            setQuantity(quantity + 1);
        }
    }

    const removeItem = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    const onAddToCartAndUpdateStock = (selectedQuantity) => {
        let updatedStock = (_stock - quantity);
        setStock(updatedStock);
        setQuantity(0);
        onAddToCart(selectedQuantity);
    }

    return (
        <div>
            <div className={itemCountClass.divExternalStyle}>
                <div className={itemCountClass.counterContainer}>
                    <Button variant="outlined" size="large" color="primary" disabled={quantity === 0}
                            onClick={_stock !== 0 ? () => removeItem() : undefined}>-
                    </Button>
                    <div className={itemCountClass.quantity}><label>{quantity}</label>
                    </div>
                    <Button variant="outlined" size="large" color="primary" disabled={(quantity === _stock)}
                            onClick={quantity <= _stock ? () => onAddItem() : undefined}>+
                    </Button>
                </div>
                <Button disabled={!_stockAvailable || quantity === 0} variant="outlined" size="large"
                        color="primary" className={itemCountClass.margin}
                        onClick={(_stockAvailable && quantity !== 0) ? () => onAddToCartAndUpdateStock(quantity) : undefined}>
                    AGREGAR AL CARRITO
                </Button>
            </div>
        </div>
    )
}
