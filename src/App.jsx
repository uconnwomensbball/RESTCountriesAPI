import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import Home from "./components/Home.jsx"
import Header from "./components/Header.jsx"
import CountryDetail from "./components/CountryDetail.jsx"

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
        <Header mode={mode} changeMode={changeMode}/>
          <Routes>
            <Route path="/" element={<Home mode={mode}/>}/>
              <Route path="/:country" element={<CountryDetail/>}/>
          </Routes>
        <footer>JDJD Codes <FontAwesomeIcon className= "fa-icon" icon={faScaleBalanced} /></footer>
    </BrowserRouter>
      </>
    )
}

export default App