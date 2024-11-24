import {createContext} from "react";
import {SWContextValue} from "./types";

export const SWContext = createContext<SWContextValue>({
    heroName: 'Luke Skywalker',
    setHeroName: () => {}
});
