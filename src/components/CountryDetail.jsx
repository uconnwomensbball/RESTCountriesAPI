import { useParams, Link } from "react-router"
import data from "../datasample.json"

export default function CountryDetail({mode}){
  let params = useParams()
 
  const matchingCountry = data.find(function(country){
    return country.name + "}" === params.country})

  return (
    <div className="country-detail">
      <Link className="back-btn" to="/" style={{
          backgroundColor: mode === "Light"? "hsl(209, 23%, 22%)": "hsl(0, 100%, 100%)", 
          color: mode === "Light"? 'hsl(0, 100%, 100%)': "hsl(200, 15%, 8%)", 
          boxShadow: mode === "Light"? "0 4px 8px hsl(207, 26%, 10%)": "5px 5px 10px hsl(0, 0%, 93%)"}}><i class="fa fa-long-arrow-left" aria-hidden="true"></i>Back</Link>
      <div className="country-detail-div">
        <img src={matchingCountry.flags.svg}/>
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
            <p><span className="bold">Borders:</span> {matchingCountry.borders? matchingCountry.borders: "None"}</p>
          </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}