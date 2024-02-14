import {useState} from "react";
function StateTutorial() {
    
    const[counter,setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("Pavli")

    const increment = ()=> {

        setCounter(counter + 1)
    };
    const onChange = (e) => {

        const newValue = e.target.value;
       /*  inputValue = newValue */
        setInputValue(newValue); 
      

    };


  return (
  
    <div className="state">
        <div>
        {counter}
          <button onClick={increment}>Increment</button>
        </div>
        <div>
            <input type="text" placeholder="enter something..." onChange={onChange} />
            {inputValue}
        </div>
          
    </div>
  )
}

export default StateTutorial;