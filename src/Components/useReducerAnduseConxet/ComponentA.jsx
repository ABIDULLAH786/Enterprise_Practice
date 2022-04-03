import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { CountContext } from "../../App";
import ComponentB from "./ComponentB";

const ComponentA = () => {
    const countContext = useContext(CountContext);
  return (
    <>
      <Card className="container col-5 bg-light my-3">
        <Card.Header> Component A</Card.Header>
        <Card.Body>
          <Card.Title>{countContext.countState}</Card.Title>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          <Button className="mx-2" onClick={()=>countContext.countDispatch("decrement")}>
            <b>-</b>
          </Button>
          <Button className="btn-danger mx-2" onClick={()=>countContext.countDispatch("reset")}>
            <b>O</b>
          </Button>
          <Button className="mx-2" onClick={()=>countContext.countDispatch("increment")}>
            <b>+</b>
          </Button>
        </Card.Footer>
      </Card>
      <div>
          {<ComponentB/>}
      </div>
    </>
  );
};

export default ComponentA;
