import React, { useReducer } from "react";
import { Button, Card } from "react-bootstrap";
const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer,initialState);
  return (
    <>
      <Card className="container col-5 bg-light my-3">
        <Card.Header> useReducer Example</Card.Header>
        <Card.Body>
          <Card.Title>{count}</Card.Title>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          <Button className="mx-2" onClick={()=>dispatch("decrement")}>
            <b>-</b>
          </Button>
          <Button className="btn-danger mx-2" onClick={()=>dispatch("reset")}>
            <b>O</b>
          </Button>
          <Button className="mx-2" onClick={()=>dispatch("increment")}>
            <b>+</b>
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default CounterOne;
