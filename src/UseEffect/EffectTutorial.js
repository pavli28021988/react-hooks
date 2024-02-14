import axios from "axios";
import { useEffect, useState } from "react";

const EffectTutorial = () => {

    const [data,setData] = useState("");
    const [count,setCount] = useState(0);

    useEffect(()=>{
       axios
       .get("https://jsonplaceholder.typicode.com/comments")
       .then((response)=>{
       //console.log(response.data);
       setData(response.data[0].email)
       console.log('API WAS CALLED');
      
       })
    }, []);
  return (
    <div>
        <hr />

<div className="effect">
        <h2> Current Email: </h2>
       
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button onClick={()=>{
            setCount(count + 1)
        }}>Click Me!!!</button>
    </div>

    </div>
    
  )
}

export default EffectTutorial