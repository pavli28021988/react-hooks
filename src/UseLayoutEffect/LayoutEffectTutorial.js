import { useEffect, useLayoutEffect, useRef } from "react"


const LayoutEffectTutorial = () => {

    const inputRef = useRef(null);

    useLayoutEffect(() => {

        console.log(inputRef.current.value);

    }, []);
    useEffect(() => {

        inputRef.current.value = "HELLO"

    }, [])
    return (
        <div>
            <hr />
            <div>
                <input type="text" ref={inputRef} value="Pavli" style={{width:400, height:60}}/>
                </div>
        </div>

    )
}

export default LayoutEffectTutorial