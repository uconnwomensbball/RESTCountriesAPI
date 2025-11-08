export default function Header(props){

  return (
    <div className = "header-div" style={{
        backgroundColor: props.mode === "Light"? "hsl(209, 23%, 22%)": "hsl(0, 100%, 100%)", 
        color: props.mode === "Light"? 'hsl(0, 100%, 100%)': "hsl(200, 15%, 8%)", 
        boxShadow: props.mode === "Light"? "0 4px 8px hsl(207, 26%, 10%)": "5px 5px 10px hsl(0, 0%, 93%)"}}>
      <h3>Where in the World?</h3>
      <p className = "mode-p small-font" onClick={props.changeMode}> {props.mode === "Dark"? <i className="fa-solid fa-moon"></i>: <i className="fa-solid fa-sun"></i>} {props.mode} Mode</p>
    </div>
  )
}