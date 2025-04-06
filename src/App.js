import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'

function App() {

  const [counter, setCounter] = useState(0)



  function onclickIncrement() {
    setCounter(counter + 1)
  }

  function onclickDecrement() {
    setCounter(counter - 1)
  }
  function onclickRandom() {
    let x = Math.floor(Math.random() * 10)
    setCounter(x)
  }

  const listAct = ["Wake up at 7", "Go for a walk", "Have Breakfast"]

  return (
    <div className="App" style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" , background: "#f4f6f8",height:"100vh",
      fontFamily: "Arial, sans-serif"}}>
      <div>
        <h1 style={{textAlign:"center"}}>{counter}</h1>
        <div  style={{
          background: "#fff",
          padding: "40px 60px",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          textAlign: "center",
          margin:"10px",
          minWidth: "300px"
        }}>
          <button style={buttonStyle} onClick={onclickIncrement}>Increment</button>
          <button style={buttonStyle} onClick={onclickDecrement}>Decrement</button>
          <button style={buttonStyle} onClick={onclickRandom}>Random Number</button>
        </div>
      </div>


      {/* <div>
        <h1>List Of Activities</h1>
        {listAct.map((item) => {
          return (<ListItem activity={item} />)
        })}
      </div> */}
    </div>
  );
}

const buttonStyle = {
  padding: "10px 15px",
  fontSize: "1rem",
  border: "none",
  margin:"10px",
  borderRadius: "8px",
  background: "#007bff",
  color: "white",
  cursor: "pointer",
  transition: "background 0.3s",
  flex: 1
};

export default App;
