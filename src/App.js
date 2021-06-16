import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {makeStyles} from "@material-ui/core";
import {appStyles} from "./AppStyles";

const useStyles = makeStyles((theme) => appStyles(theme));

export const App = () => {
    const appClasses = useStyles();
    return <div className={appClasses.container}>
        <NavBar/>
        <ItemListContainer greeting="PROXIMAMENTE"></ItemListContainer>
    </div>
}
