export default function Header({mode, changeMode}){
// TODO: Dark/Light mode no longer works -- await layout route reorg 
  return (
    <div className = "header-div" style={{
        backgroundColor: mode === "Light"? "hsl(209, 23%, 22%)": "hsl(0, 100%, 100%)", 
        color: mode === "Light"? 'hsl(0, 100%, 100%)': "hsl(200, 15%, 8%)", 
        boxShadow: mode === "Light"? "0 4px 8px hsl(207, 26%, 10%)": "5px 5px 10px hsl(0, 0%, 93%)"}}>
      <h3>Where in the World?</h3>
      <p className = "mode-p small-font" onClick={changeMode}> {mode === "Dark"? <i className="fa-solid fa-moon"></i>: <i className="fa-solid fa-sun"></i>} {mode} Mode</p>
    </div>
  )
}