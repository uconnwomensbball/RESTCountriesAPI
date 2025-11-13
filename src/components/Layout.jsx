import { Outlet } from "react-router"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

export default function Layout({mode, changeMode}){
    return (
        <>
            <Header mode={mode} changeMode={changeMode}/>
            <Outlet/>
            <Footer/>
        </>
    )
}