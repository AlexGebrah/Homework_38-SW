import Navigation from "./Navigation.tsx";
import {SWContext} from "../utils/context.ts";
import {useContext} from "react";


const Header = () => {
    const {heroName} = useContext(SWContext);

    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation/>
            <h1 className="text-center py-6 text-3xl">{heroName}</h1>
        </header>
    );
};

export default Header;