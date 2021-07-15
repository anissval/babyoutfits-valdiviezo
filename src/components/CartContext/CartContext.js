import React, {createContext, useState} from "react";
import {database} from "../../Firebase/firebase";
import firebase from 'firebase/app';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const initialQuantity = 0;
    const [cartContent, setCartContent] = useState([]);
    const [itemQuantity, setItemQuantity] = useState(initialQuantity);
    const [totalItemsIntoCart, setTotalItemsIntoCart] = useState();
    const [totalAmount, setTotalAmount] = useState(0);
    const [orderID, setOrderID] = useState();
    const [userInfo, setUserInfo] = useState();
    const [confirmedItemsBought, setConfirmedItemsBought] = useState([]);
    const [finalTotalAmount, setFinalTotalAmount] = useState();

    const addItem = (item, quantity) => {
        setItemQuantity(parseInt(quantity));
        const itemAddedToCart = isInCart(item.id);
        if (itemAddedToCart) {
            updateItemQuantity(itemAddedToCart.item, itemAddedToCart.quantity, parseInt(quantity));
        } else {
            const newEntry = createEntry(item, parseInt(quantity));
            setCartContent([...cartContent, newEntry]);
        }
        calculateTotalAmount();
    }
    const removeItem = (itemId) => {
        const updatedCart = cartContent.filter((product) =>
            product.item.id !== itemId);
        setCartContent(updatedCart);
        calculateTotalAmount();
    }
    const clear = () => {
        setTotalItemsIntoCart(0);
        setCartContent([]);
        setItemQuantity(0);
        setTotalAmount(0);
        setConfirmedItemsBought([]);
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
        cartContent.forEach(item => {
            total = parseInt(total) + parseInt(item.quantity)
        });
        setTotalItemsIntoCart(total);
    }

    const calculateTotalAmount = () => {
        let totalAmount = 0;
        cartContent.forEach(product => {
            totalAmount = totalAmount + (parseInt(product.quantity) * parseInt(product.item.price));
        });
        setTotalAmount(totalAmount);
    }

    const confirmUserOrderData = (name, phone, email) => {
        setUserInfo({name: name, phone: phone, email: email});
        let itemsUpdated = [];
        const items = cartContent.map((content) => {
            const newItem = {
                id: content.item.id,
                title: content.item.title,
                price: content.item.price,
                quantity: content.quantity
            }
            itemsUpdated = [...itemsUpdated, newItem];
            return (newItem);
        });
        setConfirmedItemsBought(itemsUpdated);
        setFinalTotalAmount(totalAmount);
        const newOrder = {
            buyer: {name: name, phone: phone, email: email},
            items: items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalAmount
        }
        persistNewOrderIntoDataBase(newOrder, items);
    };

    const persistNewOrderIntoDataBase = (newOrder, items) => {
        const orders = database.collection('orders');
        orders.add(newOrder).then(({id}) => {
            setOrderID(id);
            setCartContent([]);
            updateStockIntoDataBase(items);
        }).catch(error => {
            console.log(error);
        }).finally();
    }

    const updateStockIntoDataBase = (items) => {
        const batch = database.batch();
        items.forEach((entry) => {
            const itemFound = cartContent.filter((content) => (content.item.id === entry.id));
            const oldStock = itemFound[0].item.stock;
            const updateItem = database.collection('productos').doc(entry.id);
            const newStock = (parseInt(oldStock) - parseInt(entry.quantity));
            batch.update(updateItem, {stock: newStock});
        });
        batch.commit().then(() => {
            console.log("Stocks actualizados.")
        }).catch((error) => {
            console.log(error)
        })
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
                calculateItemsIntoCart,
                confirmUserOrderData,
                orderID,
                userInfo,
                confirmedItemsBought,
                finalTotalAmount
            }}>
            {props.children}
        </CartContext.Provider>
    )


}
