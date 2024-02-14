
import { useRef } from "react";
import Button from "./Button";


const ImperativeHandle = () => {
    const buttonRef = useRef(null);
  return (
    <div className="imperative">
        <hr />

      <div>
        <button onClick={()=>{
            buttonRef.current.alterToggle();
        }}>Button From Parent</button>
        <Button ref={buttonRef}/>
      </div>
        
    </div>
    
  )
}

export default ImperativeHandle