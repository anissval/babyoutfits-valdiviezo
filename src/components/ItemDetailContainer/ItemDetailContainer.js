import React, {useEffect, useState} from "react";
import {CircularProgress} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {itemDetailCointainerStyle} from "./ItemDetailContainerStyles";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import {ItemCount} from "../ItemCount/ItemCount";
import {database} from "../../Firebase/firebase";
import {processProductFromDB} from "../../Utils/Utils";


const useStyles = makeStyles((theme) => itemDetailCointainerStyle(theme));

export const ItemDetailContainer = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const {id} = useParams();

    const getProductByID = (id) => {
        const productsCollection = database.collection('productos');
        const product = productsCollection.doc(id);
        product.get().then((doc) => {
            setProducts(processProductFromDB(doc));
        }).catch((error) => {
            console.log("error searching item", error);
        }).finally(() => {
        });
    };
    useEffect(() => {
        if (id) {
            getProductByID(id);
        }
    }, [id]);

    return (
        <>
            {
                (products.length === 0) ? (
                    <div className={classes.loading}><CircularProgress size={100}/></div>) : (
                    <ItemDetail product={products[0]} component={ItemCount}/>
                )
            }
        </>
    )
}
