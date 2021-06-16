import React, {useEffect, useState} from "react";
import {CircularProgress, makeStyles} from "@material-ui/core";
import {itemListCointainerStyle} from "./ItemListCointainerStyle";
import {ItemList} from "../Item/ItemList";
import babyProducts from "../Item/productListMock";

const useStyles = makeStyles((theme) => itemListCointainerStyle(theme));

export const ItemListContainer = (props) => {
    const classes = useStyles();
    const {greeting} = props;
    let [products, setProduct] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);
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
            setShowSpinner(true);
            productsPromise.then(result => {
                setProduct(result);
                setShowSpinner(false);
            }).catch(error => {
                setShowSpinner(false);
                console.log(error)
            })
        }, 2000);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (<>
            {
                products.length === 0 ? <div className={classes.loading}><CircularProgress size={100}/></div> :
                    <div className={classes.container}>
                        <ItemList products={products}></ItemList>)
                    </div>
            }
        < />
    )
}


