import React, {useEffect, useState} from "react";
import {CircularProgress} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {itemDetailCointainerStyle} from "./ItemDetailContainerStyles";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import babyProducts from "../MockData/productListMock";
import {useParams} from "react-router-dom";
import {ItemCount} from "../ItemCount/ItemCount";

const useStyles = makeStyles((theme) => itemDetailCointainerStyle(theme));

export const ItemDetailContainer = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const mockData = babyProducts;
    const {id} = useParams();

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
                const dataFiltered = mockData.filter((product) => {
                    return product.id == id
                });
                setProducts(dataFiltered);
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
                    <ItemDetail product = {products[0]} component = {ItemCount}/>
                )
            }
        </>
    )
}
