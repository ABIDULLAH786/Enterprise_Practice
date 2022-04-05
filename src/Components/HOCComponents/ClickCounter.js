import React from "react";
import { Button } from "react-bootstrap"
import withCounter from "./withCounter";

class ClickCounter extends React.Component {
    render(){
        const {count, increment} = this.props;
        return(<>
            <h4>Click Counter:  {count}</h4>
            <Button onClick={increment}>
                +1
            </Button>    
            </>)
    }
}
export default withCounter(ClickCounter)
