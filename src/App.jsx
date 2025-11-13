import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router"
import './App.css'
import Home from "./components/Home.jsx"
import CountryDetail from "./components/CountryDetail.jsx"
import Layout from "./components/Layout.jsx"

// TODO: Refactor this function
// ! Warning: deprecated
// ? Should this be async?
// * Highlighted line
// // This will appear struck through

function App() {

  //light and dark mode functionality 
  const [mode, setMode] = useState("Dark")
  function changeMode(){
    if (mode === "Dark"){
      setMode("Light")
    } 
    else {
      setMode("Dark")}
  } 


    return (
      <>
      <BrowserRouter>      
          <Routes>
             <Route element={<Layout mode={mode} changeMode={changeMode}/>}> 
                <Route path="/" element={<Home mode={mode}/>}/>
                <Route path="/:country" element={<CountryDetail/>}/>
              </Route> 
          </Routes>
      
    </BrowserRouter>
      </>
    )
}

export default App
