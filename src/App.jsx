import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import data from "./datasample.json"
import './App.css'
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

  //countries data
    const [countriesData, setCountriesData] = useState(data)

  //displays countries  
    const [displayedCountries, setDisplayedCountries] = useState(countriesData)

    const mappedCountries = displayedCountries.map(function(country){
  
      return (
        <>
        <Link to={`/${country.name}}`}>
          <div className = "individual-country-div" key={country.name} style={{
            backgroundColor: mode === "Light"? "hsl(209, 23%, 22%)": "hsl(0, 100%, 100%)", 
            color: mode === "Light"? "hsl(0, 100%, 100%)": "hsl(200, 15%, 8%)", 
            boxShadow: mode === "Light"? "0 4px 8px hsl(207, 26%, 10%)": "5px 5px 10px hsl(0, 0%, 93%)"}}>
            <img src={country.flags.png}/>
            <div className = "country-details">
              <h4>{country.name}</h4>
              <p className= "small-font"><span className="bold">Population:</span> <span>{country.population.toLocaleString()}</span></p>
              <p className= "small-font"><span className="bold">Region:</span> <span>{country.region}</span></p>
              <p className= "small-font"><span className="bold">Capital:</span> <span>{country.capital}</span></p>
            </div>
          </div>
        </Link>
        </>
      )
    })

  //filters countries by region 
    function filterByRegion(region){
      const countriesFilteredByRegion = countriesData.filter(function(country){
        return country.region === region
      })
    
      if (region === "All"){
        setDisplayedCountries(countriesData)}
      else{
        setDisplayedCountries(countriesFilteredByRegion)}
    
    }
    
    //filters countries by name
    function filterByName(name){
      const countriesFilteredByName = countriesData.filter(function(country){
        return country.name.toLowerCase().includes(name.toLowerCase())
      })
      setDisplayedCountries(countriesFilteredByName)
    }

    return (
      <>
      <BrowserRouter>
          <Routes>
            <Route path="/:name" element={<CountryDetail/>}/>
          </Routes>

        <Header mode={mode} changeMode={changeMode}/>
      
        <div className="query-div" style={{
          backgroundColor: mode === "Light"? "hsl(207, 26%, 17%)": "hsl(0, 0%, 99%)",
          color: mode === "Light"? 'hsl(0, 100%, 100%)': "hsl(200, 15%, 8%)"}}>
          <div className="input-country-div small-font">
            <label htmlFor="country"> <i className="fa-solid fa-magnifying-glass"></i> Search for a country:</label>
            <input  onChange={()=>filterByName(event.target.value)} id="country" className="small-font" placeholder="e.g. Albania" style={{
                backgroundColor: mode === "Light"? "hsl(209, 23%, 22%)": "hsl(0, 100%, 100%)",
                color: mode === "Light"? 'hsl(0, 100%, 100%)': "hsl(200, 15%, 8%)",
                boxShadow: mode === "Light"? "0 4px 8px hsl(207, 26%, 10%)": "5px 5px 10px hsl(0, 0%, 93%)" }}></input>
          </div>
          <div className="select-region-div">
            <label htmlFor="region" className = "small-font">Filter by region:</label>
            <select onChange={()=>filterByRegion(event.target.value)} defaultValue="Africa" style={{
                backgroundColor: mode === "Light"? "hsl(209, 23%, 22%)": "hsl(0, 100%, 100%)", 
                color: mode === "Light"? 'hsl(0, 100%, 100%)': "hsl(200, 15%, 8%)", 
                boxShadow: mode === "Light"? "0 4px 8px hsl(207, 26%, 10%)": "5px 5px 10px hsl(0, 0%, 93%)"}}>
              <option value="All">All</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
     
          

          <div className="countries-div" style={{
          backgroundColor: mode === "Light"? "hsl(207, 26%, 17%)": "hsl(0, 0%, 99%)",
          color: mode === "Light"? 'hsl(0, 100%, 100%)': "hsl(200, 15%, 8%)"}}>
            {mappedCountries}
          </div>
                <footer>JDJD Codes <FontAwesomeIcon className= "fa-icon" icon={faScaleBalanced} /></footer>
    </BrowserRouter>
      </>
    )
}

export default App