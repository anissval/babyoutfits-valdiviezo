import React, {useState} from "react";
import {CircularProgress, Grid} from "@material-ui/core";
import {Item} from "./Item";
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import {itemListStyles} from "./ItemListStyles";

const useStyles = makeStyles((theme) => itemListStyles(theme));

export const ItemList = (props) => {
    const [position, setPosition] = useState();
    const classes = useStyles();
    const {products} = props || [];
    const listItems = products.map((product) => (
        <Grid item xs={4}>
            <Paper className={classes.paper}><Item id={product.id} title={product.title}
                                                   description={product.productDescription}
                                                   price={product.price}
                                                   pictureUrl={product.pictureUrl}/></Paper>
        </Grid>
    ));

    const FormRow = () => {
        return (
            <React.Fragment>
                {listItems? listItems: <CircularProgress size={20}/>}
            </React.Fragment>
        )
    };

    return (<div>
        <Grid container spacing={2}>
            <Grid container item xs={12} spacing={1}>
                <FormRow/>
            </Grid>
        </Grid>
    </div>)
}
