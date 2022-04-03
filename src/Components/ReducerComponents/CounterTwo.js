import React, { useReducer } from "react";
import { Button, Card } from "react-bootstrap";
const initialState = {
  firstCounter:0,
  secondCounter:10
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state,firstCounter: state.firstCounter + action.value}
    case "decrement":
      return {...state, firstCounter: state.firstCounter - action.value}
      case "increment2":
        return { ...state, secondCounter: state.secondCounter + action.value}
      case "decrement2":
        return {...state, secondCounter: state.secondCounter - action.value}
    case "reset":
      return initialState
    default:
      return state;
  }
};
const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer,initialState);
  return (
    <>
      <Card className="container col-5 bg-light my-3">
        <Card.Header> useReducer Example-2 using object</Card.Header>
        <Card.Body>
          <Card.Title>First Counter: {count.firstCounter}</Card.Title>
          <Card.Title>Second Counter: {count.secondCounter}</Card.Title>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          <Button className="mx-2" onClick={()=>dispatch({type:"decrement",value:5})}>
            <b>-5</b>
          </Button>
          <Button className="btn-danger mx-2" onClick={()=>dispatch({type: "reset"})}>
            <b>O</b>
          </Button>
          <Button className="mx-2" onClick={()=>dispatch({type:"increment",value:5})}>
            <b>+5</b>
          </Button>
          
        </Card.Footer>

        <Card.Footer>
        <div>
            <Button className="my-2" onClick={()=>dispatch({type:"decrement2",value:2})}>
              <b>-2</b>
            </Button>
            <Button className="mx-2" onClick={()=>dispatch({type:"increment2",value:2})}>
              <b>+2</b>
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default CounterTwo;
