import React from "react";


const UserContext = React.createContext();
const SubjectContext = React.createContext();

const UserConsumer = UserContext.Consumer;
const UserProvider = UserContext.Provider;
const SubjectConsumer = SubjectContext.Consumer;
const SubjectProvider = SubjectContext.Provider;
export {UserConsumer, UserContext, UserProvider, SubjectConsumer,SubjectProvider,SubjectContext}