import { useState } from "react";
import { useRef } from "react";


export default function Player() {
  const userInputName = useRef(null);
  const [enteredUserName, setEnterdUserName] = useState(null)
  const handleClicked = ()=>{
    setEnterdUserName(userInputName.current.value);
    userInputName.current.value
    userInputName.current.value ='';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredUserName ?? 'unknown entity'}</h2>
      <p>
        <input ref={userInputName} type="text" />
        <button  onClick={handleClicked}>Set Name</button>
      </p>
    </section>
  );
}
