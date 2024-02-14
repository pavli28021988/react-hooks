import { useReducer, useState } from "react"

const reducer = (state, action) => {

    switch (action.type) {
        case "INCREMENT":

           return {count: state.count + 1, showText: state.showText};
        case "toggleShowText":

            return {count: state.count, showText: !state.showText};

        default:
            return state;
    }

};

const ReduserTutorial = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);
    return (
        <div>

            <div className="reduserS">
                <h1>{state.count}</h1>
                <button onClick={() => {
                    dispatch({type:"INCREMENT"})
                    dispatch({type:"toggleShowText"})
                }}>Click Me!!!</button>

                {state.showText && <p>This is a text</p>}
            </div>

            <hr />

            <div className="reduserS">
                <h1>{count}</h1>
                <button onClick={() => {
                    setCount(count + 1);
                    setShowText(!showText);
                }}>Click Me!!!</button>

                {showText && <p>This is a text</p>}

            </div>

        </div>

    )
}

export default ReduserTutorial


