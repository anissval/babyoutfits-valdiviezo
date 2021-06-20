import React from "react";
import {ItemListContainer} from "../ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "../ItemDetailContainer/ItemDetailContainer";
import {
    Route, Switch
} from "react-router-dom";

export const AppRouter = () => {

    return (
        <>
            <Switch>
                <Route exact path="/"><ItemListContainer/></Route>
                <Route path="/ItemListContainer"><ItemListContainer/></Route>
                <Route path="/category/:categoryID"><ItemListContainer/></Route>
                <Route path="/item/:id"><ItemDetailContainer/></Route>
            </Switch>
        </>
    )
}
