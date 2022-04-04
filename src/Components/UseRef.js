import { useEffect, useRef, useState } from "react";

// useRef does not cause a component to rerender/rerender when it change
// it use to refrence elements inside html
// it help to perform an action onChange event stuff 
const UseRef=()=>{
    const [name, setName] = useState("");
    const [input2, setInput2] = useState("");
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);
    const inputRef = useRef();
    useEffect(()=>{
        renderCount.current = renderCount.current+1;
    });
    function focus(){
        inputRef.current.focus();
        inputRef.current.value = "Get Focused by Clicking on Button"
    }
    return(
        <>
            <div className="my-5 ">
                <div className="card col-4 offset-md-4 bg-light my-5">
                    <h5 className="card-header mb-3">Basic Example</h5>
                    <input className="mx-5" value={name} onChange={ e=> setName(e.target.value)} />
                    <div>Text Field has value: {name}</div>
                    <div>Total <i className="display-6 text-danger">{renderCount.current}</i> time renderd</div>
                </div>
                <div className="card col-4 offset-md-4 bg-light my-5">
                    <h5 className="card-header">Usecase: Refrencing HTML elements</h5>
                    <input className="mx-5 my-3" 
                        ref={inputRef}
                        value={input2}
                        onChange={ e=> setName(e.target.value)} 
                    />
                    <div className="card-footer">
                        <button className="btn btn-outline-primary" onClick={focus}>
                            Focus
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UseRef;
