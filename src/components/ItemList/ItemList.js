import React from "react";
import {CircularProgress, Grid} from "@material-ui/core";
import {Item} from "../Item/Item";
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import {itemListStyles} from "./ItemListStyles";

const useStyles = makeStyles((theme) => itemListStyles(theme));

export const ItemList = (props) => {
    const itemListClasses = useStyles();
    const {products} = props || [];
    const listItems = products.map((product) => (
        <Grid item xs={4} key={product.id}>
            <Paper className={itemListClasses.paper}><Item product={product}/></Paper>
        </Grid>
    ));

    const FormRow = () => {
        return (
            <React.Fragment>
                {listItems ? listItems : <CircularProgress size={20}/>}
            </React.Fragment>
        )
    };

    return (<div>
        <Grid container item xs={12} spacing={1}>
            <FormRow/>
        </Grid>
    </div>)
}
