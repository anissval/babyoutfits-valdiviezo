import React, {useEffect, useState} from "react";
import {CircularProgress, makeStyles} from "@material-ui/core";
import {itemListCointainerStyle} from "./ItemListCointainerStyle";
import {ItemList} from "../ItemList/ItemList";
import babyProducts from "../MockData/productListMock";
import {useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => itemListCointainerStyle(theme));

export const ItemListContainer = (props) => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const mockData = babyProducts;
    const [showLoadind, setShowLoading] = useState(true);
    const {categoryID} = useParams();

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
                if (categoryID) {
                    const dataFiltered = mockData.filter((product) => {
                        return product.category === categoryID
                    });
                    setShowLoading(false);
                    setProducts(dataFiltered);
                } else {
                    setShowLoading(false);
                    setProducts(result);
                }
            }).catch(error => {
                console.log(error)
            })
        }, 2000);
    }

    useEffect(() => {
        setShowLoading(true)
        getProducts();
    }, [categoryID]);

    return (
        <>
            {
                showLoadind ? <div className={classes.loading}><CircularProgress size={60}/></div> :
                    <div className={classes.container}>
                        <ItemList products={products}></ItemList>
                    </div>
            }
        < />
    )
}


