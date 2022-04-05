import React from "react";
import { Button } from "react-bootstrap";
import withCounter from "./withCounter";

const MouseHoverCounter =(props)=>{
    
        const {count, increment} = props;
        return(<>
            <h4>Mouse Hover Counter: {count}</h4>
            <Button onMouseOver={increment}>
                +1
            </Button>    
            </>)
    
}
const Wrapper = withCounter(MouseHoverCounter);
 
export default Wrapper; 