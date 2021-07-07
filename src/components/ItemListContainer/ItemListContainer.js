import React, {useEffect, useState} from "react";
import {CircularProgress, makeStyles} from "@material-ui/core";
import {itemListCointainerStyle} from "./ItemListCointainerStyle";
import {ItemList} from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import {database} from "../../Firebase/firebase";
import {processDataFromDB} from "../../Utils/Utils";

const useStyles = makeStyles((theme) => itemListCointainerStyle(theme));

export const ItemListContainer = (props) => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const [showLoadind, setShowLoading] = useState(true);
    const {categoryID} = useParams();

    useEffect(() => {
        setShowLoading(true);
        if (categoryID) {
            getProductsFromDBbyCategory();
        } else {
            getAllProductsFromDB();
        }
    }, [categoryID])

    const getAllProductsFromDB = () => {
        const productsCollection = database.collection('productos');
        productsCollection.get().then((querySnapshot) => {
            setProducts(processDataFromDB(querySnapshot));
        }).catch((error) => {
            console.log("error searching items", error);
        }).finally(() => {
            setShowLoading(false)
        });
    };

    const getProductsFromDBbyCategory = () => {
        const productsCollection = database.collection('productos').where('category', '==', categoryID);
        productsCollection.get().then((querySnapshot) => {
            setProducts(processDataFromDB(querySnapshot));
        }).catch((error) => {
            console.log("error searching items", error);
        }).finally(() => {
            setShowLoading(false);
        });
    };

    return (
        <>
            {
                showLoadind ? <div className={classes.loading}><CircularProgress size={60}/></div> :
                    <div className={classes.container}>
                        <ItemList products={products}/>
                    </div>
            }
        < />
    )
}


