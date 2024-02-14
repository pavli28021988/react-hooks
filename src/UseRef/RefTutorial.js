import { useRef } from "react"


const RefTutorial = () => {
    const inputRef = useRef("");
    const onClick = () => {
        //console.log(inputRef.current.value);
        inputRef.current.value = "" // clean the input
    }
  return (
    <div className="ref">
        <hr />
        <div className="ref">
            <h1>Pavli</h1>
            <input type="text" placeholder="Ex..." ref={inputRef}/>
            <button onClick={onClick}>Change Name</button>
        </div>
    </div>
  )
}

export default RefTutorial