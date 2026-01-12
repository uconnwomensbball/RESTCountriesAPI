import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'

export default function Footer({mode}){
    return (
        <footer
            style={{
            backgroundColor: mode === "Light"? "hsl(207, 26%, 17%)": "hsl(0, 0%, 95%)", 
            color: mode === "Light"? 'hsl(0, 100%, 100%)': "hsl(200, 15%, 8%)"}}>
            JDJD Codes <FontAwesomeIcon className= "fa-icon" icon={faScaleBalanced} alt=""/></footer>
        )
}