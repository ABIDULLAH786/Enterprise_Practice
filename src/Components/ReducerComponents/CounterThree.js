import { useReducer } from "react";
import { Button, Card } from "react-bootstrap";

const initialState = 0;
// ={
//     firstValue:0,
//     secondValue:0
// }
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="container col-5 my-3">
        <Card>
          <Card.Header className="display-6">
            Multiple useReducer( )
          </Card.Header>
          <Card.Body className="display-6">
            <b>{count}</b>
          </Card.Body>
          <Card.Footer>
            <h5>Change Counter On Click</h5>
            
            <Button
              className="mx-1"
              onClick={() => dispatch({ type: "decrement", value: 2 })}
            >
              -2
            </Button>
            <Button
              className="mx-1"
              onClick={() => dispatch({ type: "reset" })}
            >
              O
            </Button>
            <Button
              className="mx-1"
              onClick={() => dispatch({ type: "increment", value: 2 })}
            >
              +2
            </Button>
          </Card.Footer>
          <Card.Footer>
            <div>
                <h5>Change Counter On Mouse Hover</h5>
              <Button
                className="my-2"
                onMouseOver={() => dispatch({ type: "decrement", value: 1 })}
              >
                <b>-1</b>
              </Button>
              <Button
                className="mx-2"
                onMouseOver={() => dispatch({ type: "increment", value: 1 })}
              >
                <b>+1</b>
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default CounterThree;
