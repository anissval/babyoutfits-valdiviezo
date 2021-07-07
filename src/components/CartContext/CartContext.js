import React, {createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
    const initialQuantity = 0;
    const [cartContent, setCartContent] = useState([]);
    const [itemQuantity, setItemQuantity] = useState(initialQuantity);
    const [totalItemsIntoCart, setTotalItemsIntoCart] = useState();
    const [totalAmount, setTotalAmount] = useState(0);
    const addItem = (item, quantity) => {
        setItemQuantity(parseInt(quantity));
        const itemAddedToCart = isInCart(item.id);
        if (itemAddedToCart) {
            updateItemQuantity(itemAddedToCart.item, itemAddedToCart.quantity, parseInt(quantity));
        } else {
            const newEntry = createEntry(item, parseInt(quantity));
            setCartContent([...cartContent,newEntry]);
        }
    }
    const removeItem = (itemId) => {
        const updatedCart = cartContent.filter((product) =>
            product.item.id !== itemId);
        setCartContent(updatedCart);
    }
    const clear = () => {
        setCartContent([])
    }
    const isInCart = (id) => {
        const cartContentFiltered = cartContent.filter((entry) => entry.item.id === id);
        if (cartContentFiltered.length > 0) {
            return cartContentFiltered[0];
        } else {
            return null;
        }
    }
    const updateItemQuantity = (item, currentQuantity, quantityToAdd) => {
        const itemUpdated = {item: item, quantity: (parseInt(currentQuantity) + parseInt(quantityToAdd))};
        const oldItemRemovedFromCart = cartContent.filter((entry) => {
            return entry.item.id !== item.id;
        });
        setCartContent([...oldItemRemovedFromCart, itemUpdated]);
    }
    const createEntry = (item, quantity) => {
        const newItem = {item: item, quantity: parseInt(quantity)}
        return newItem;
    }

    const calculateItemsIntoCart = () => {
        let total = 0;
        cartContent.forEach(item => {total = parseInt(total) + parseInt(item.quantity)});
        setTotalItemsIntoCart(total);
    }

    const calculateTotalAmount = () => {
        let totalAmount = 0;
        cartContent.forEach(product => {
            totalAmount = totalAmount + (parseInt(product.quantity) * parseInt(product.item.price));
        });
        setTotalAmount(totalAmount);
    }

    return (<CartContext.Provider
            value={{
                cartContent,
                addItem,
                removeItem,
                clear,
                isInCart,
                itemQuantity,
                totalItemsIntoCart,
                calculateTotalAmount,
                totalAmount,
                calculateItemsIntoCart
            }}>
            {props.children}
        </CartContext.Provider>
    )


}
