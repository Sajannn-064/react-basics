import { useState } from "react";

export default function App(){
   const [count, setcount] = useState (0);
   function handleClick(){
    setcount(prev=>prev + 1);
  }
  return(  
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
     
    <h1> Counters are updated simultaneously</h1>
    <MyButton count={count} onClick={handleClick}/>
    <MyButton count={count} onClick={handleClick}/>
    </div>    
  );
}


function MyButton({count, onClick}){
  return(
    <button onClick = {onClick}>
      Clicked {count} times
      </button>
  );
}