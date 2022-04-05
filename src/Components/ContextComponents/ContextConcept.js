import { useContext } from "react";
import {
  SubjectConsumer,
  SubjectContext,
  SubjectProvider,
  UserConsumer,
  UserContext,
  UserProvider,
} from "./UserContext";

const ContextConcept = () => {
  return (
    <>
      <h1>Context Concept</h1>
      <UserProvider value="Abidullah">
        <SubjectProvider value={"Enterprise App & Dev"}>
          <ComponentA />
        </SubjectProvider>
      </UserProvider>
    </>
  );
};

function ComponentA() {
  return (
    <>
      <ComponentB />
    </>
  );
}
function ComponentB() {
  return (
    <>
      <ComponentC />
    </>
  );
}
function ComponentC() {


  return (
    <>
      <UserConsumer>
        {(name) => {
          return (
            <SubjectConsumer>
              {(subject) => {
                return (
                  <div>
                    <h1>Using the Context Concept Whitout useContext() hook</h1>
                    <h3>
                      AND here is the data via Context:
                      <i className="text-danger">{name}</i>,
                      <br />
                      And subject is: <i className="text-Success">
                        {subject}
                      </i>
                    </h3>
                  </div>
                );
              }}
            </SubjectConsumer>
          );
        }}
      </UserConsumer>
      <hr className="my-5" />
      <ComponentD />
    </>
  );
}
function ComponentD() {
  const user = useContext(UserContext);
  const subject = useContext(SubjectContext);
  return (
    <>
      <div>
        <h1>Using the Context Concept by usin useContext() hook</h1>
        <h3>
            AND here is the data via Context:
            <i className="text-danger">{user}</i>,
            <br />
            And subject is: <i className="text-Success">{subject}</i>
        </h3>
      </div>
    </>
  );
}
export default ContextConcept;
