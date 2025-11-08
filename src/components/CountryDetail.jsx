import { useParams } from "react-router"
import data from "../datasample.json"

export default function CountryDetail(){
   let { name }= useParams()
   console.log("name", name)
  const filteredCountry = data.filter(function(country){
    return country.name === name

    
  })
  console.log(filteredCountry)
  console.log("filteredCountry", filteredCountry)
  return (
    <>
      <h1>Country detail page!</h1>
      {filteredCountry}
    </>
  )
}