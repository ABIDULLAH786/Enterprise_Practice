import { useEffect, useRef, useState } from "react";

// useRef does not cause a component to rerender/rerender when it change
const UseRef=()=>{
    const [name, setName] = useState("");
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);
    useEffect(()=>{
        renderCount.current = renderCount.current+1;
    });
    return(
        <>
            <div className="my-5 ">
                <input value={name} onChange={ e=> setName(e.target.value)} />
                <div>My Name is: {name}</div>
                <div>Total <i className="display-6 text-danger">{renderCount.current}</i> time renderd</div>
            </div>
        </>
    )
}
export default UseRef;
