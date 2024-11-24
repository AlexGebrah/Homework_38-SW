import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {SWContext} from "./utils/context.ts";
import {useState} from "react";

function App() {
    const [heroName, setHeroName] = useState('Luke Skywalker')

    return (
        <SWContext.Provider value={{
            heroName,
            setHeroName}
        }>
            <Header/>
            <Main/>
            <Footer/>
        </SWContext.Provider>
    )
}

export default App