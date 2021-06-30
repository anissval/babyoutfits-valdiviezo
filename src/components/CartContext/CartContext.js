import React, {createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
    const initialQuantity = 0;
    const [cartContent, setCartContent] = useState([]);
    const [itemQuantity, setItemQuantity] = useState(initialQuantity);
    const addItem = (item, quantity) => {
        setItemQuantity(quantity);
        const itemAddedToCart = isInCart(item.id);
        if (itemAddedToCart) {
            updateItemQuantity(itemAddedToCart.item, itemAddedToCart.quantity, quantity);
        } else {
            const updatedCartContent = [...cartContent, createEntry(item, quantity)];
            setCartContent(updatedCartContent);
        }
    }
    const removeItem = (itemId) => {
        const updatedCart = cartContent.filter((product) =>
            product.id !== itemId);
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
        const newItem = {item: item, quantity: quantity}
        return newItem;
    }


    return (<CartContext.Provider value={{cartContent, addItem, removeItem, clear, isInCart, itemQuantity}}>
            {props.children}
        </CartContext.Provider>
    )


}
