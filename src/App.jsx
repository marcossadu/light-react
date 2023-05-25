import './App.css'
import LightOnImg from './assets/lighton.png'
import LightOffImg from './assets/lightoff.png'
import {useState} from 'react' 

function App() {

  return (
    <>
      <Light />
    </>
  )
}

function Light() {
const [statusLight, setStatusLight]=useState("on")

function HandleLightOn(){
  setStatusLight("on")
}
function HandleLightOff(){
  setStatusLight("off")
}
  return <div>
    <h1>Click the buttons to turn on or off the light</h1>
    <img src={statusLight === "on"?LightOnImg:LightOffImg} />
    <div>
      <button onClick={HandleLightOn} style={{display: statusLight === "on"? "none" :"inline"}}>Turn On</button>
    <button onClick={HandleLightOff} style={{display:statusLight ==="on"? "inline":"none"}}>Turn Off</button></div>
  </div>
}

export default App
