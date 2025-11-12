import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
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
        <footer>JDJD Codes <FontAwesomeIcon className= "fa-icon" icon={faScaleBalanced} /></footer>
    </BrowserRouter>
      </>
    )
}

export default App
