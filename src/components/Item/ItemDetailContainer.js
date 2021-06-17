import React, {useEffect, useState} from "react";
import {CircularProgress, Grid} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {itemDetailCointainerStyle} from "./ItemDetailContainerStyles";
import {ItemDetail} from "./ItemDetail";
import babyProducts from "./productListMock";

const useStyles = makeStyles((theme) => itemDetailCointainerStyle(theme));

export const ItemDetailContainer = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const mockData = babyProducts;

    const productsPromise = new Promise((resolve, reject) => {
        if (mockData) {
            resolve(mockData);
        } else {
            reject("Error al obtener los productos.")
        }
    })

    const getProducts = () => {
        setTimeout(() => {
            productsPromise.then(result => {
                setProducts(result);

            }).catch(error => {
                console.log(error)
            })
        }, 2000);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            {
                (products.length === 0) ? (<div className={classes.loading}><CircularProgress size={100}/></div>) : (
                    <Paper className={classes.paper}><ItemDetail id={products[0].id} title={products[0].title}
                                                                 description={products[0].productDescription}
                                                                 price={products[0].price}
                                                                 pictureUrl={products[0].pictureUrl}/></Paper>
                )
            }
        </>
    )
}
