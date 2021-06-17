import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {makeStyles} from "@material-ui/core";
import {appStyles} from "./AppStyles";
import {ItemDetailContainer} from "./components/Item/ItemDetailContainer";

const useStyles = makeStyles((theme) => appStyles(theme));

export const App = () => {
    const appClasses = useStyles();
    return <div className={appClasses.container}>
        <NavBar/>
        <ItemDetailContainer/>
    </div>
}
