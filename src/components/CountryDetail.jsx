import { useParams, Link } from "react-router"
import data from "../data.json"
import countries from "i18n-iso-countries"
import en from "i18n-iso-countries/langs/en.json"

export default function CountryDetail({mode}){
  let params = useParams()
 
  const matchingCountry = data.find(function(country){
    return country.name + "}" === params.country})

  countries.registerLocale(en)

    console.log("borders",matchingCountry.borders)
    //console.log(countries.getName(params.country.split("").slice(0, -1).join(""), "en")) // "United States"
    //https://www.npmjs.com/package/i18n-iso-countries
  //const matchingCountrysBorders = matchingCountry.borders.map(function(border){
    //return countries.getName(border)
  //})

  return (
    <>
    <Link className="back-btn" to="/" style={{
          backgroundColor: mode === "Light"? "hsl(209, 23%, 22%)": "hsl(0, 100%, 100%)", 
          color: mode === "Light"? 'hsl(0, 100%, 100%)': "hsl(200, 15%, 8%)", 
          boxShadow: mode === "Light"? "0 4px 8px hsl(207, 26%, 10%)": "5px 5px 10px hsl(0, 0%, 93%)"}}><i className="fa fa-long-arrow-left" aria-hidden="true"></i>Back</Link>
    <div className="country-detail" style={{
          backgroundColor: mode === "Light"? "hsl(207, 26%, 17%)": "hsl(0, 0%, 95%)",
          color: mode === "Light"? "hsl(0, 0%, 95%)": "hsl(200, 15%, 8%)"}}>
      
      <div className="country-detail-div">
        <img src={matchingCountry.flags.svg} alt={`flag of ${matchingCountry.name}`}/>
        <div>
          <h1>{matchingCountry.name}</h1>
          <div className="country-details-div">
          <div>
            <p><span className="bold">Capital:</span> {matchingCountry.capital}</p>
            <p><span className="bold">Population:</span> {matchingCountry.population.toLocaleString()}</p>
            <p><span className="bold">Region:</span> {matchingCountry.region}</p>
            <p><span className="bold">Subregion:</span> {matchingCountry.subregion}</p>
          </div>
          <div>
            <p><span className="bold">Language(s):</span> {matchingCountry.languages[0].name}</p>
            <p><span className="bold">Currency:</span> {matchingCountry.currencies[0].name}</p>
            <p><span className="bold">Borders:</span> {matchingCountry.borders? matchingCountry.borders.map(function(border){
    return countries.getName(border, "en")
  }): "None"}</p>
          </div>
          </div>
        </div>
      </div>
    
    </div>
    </>
  )
}