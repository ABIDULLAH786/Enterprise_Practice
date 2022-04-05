import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ClickCounter from "./ClickCounter";
import MouseHoverCounter from "./MouseHoverCounter";
export const HOC_1 = () => {
  const param = useParams();
  return (
    <>
      <h1>HOC Example-1</h1>
      <ClickCounter />
      <MouseHoverCounter />
      {/* <Card className="container col-5 bg-light my-3">
        <Card.Header>HOC Example For Counter</Card.Header>
        <Card.Body>
          <Card.Title>Count: </Card.Title>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          <Button className="mx-2">
            <b>Click here to +1</b>
          </Button>
          <Button className="btn-danger mx-2" >
            <b>Hover here to +1</b>
          </Button>
        </Card.Footer>
      </Card> */}
    </>
  );
};


