import {Routes,Route} from "react-router-dom"
import './App.css';
import ContextConcept from './Components/ContextComponents/ContextConcept';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import CounterOne from './Components/ReducerComponents/CounterOne';
import CounterTwo from './Components/ReducerComponents/CounterTwo';
import Home from "./Components/Home";
import CounterThree from "./Components/ReducerComponents/CounterThree";
import React, { useReducer } from "react";
import ComponentA from "./Components/useReducerAnduseConxet/ComponentA";
import UseRef from "./Components/UseRef";

export const CountContext = React.createContext()
const initialState=0;
const reducer = (state,action)=>{
  switch(action)
  {
    case "increment":
        return state+1;
    case "decrement":
      return state-1;
    case "reset":
      return initialState;
    default:
      return state;
  }
}
function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div className='App'>
      <Header />
      <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contextconcept" element={<ContextConcept />}/>
        <Route path="/reducerconcept" element={<Home/>}/>
        <Route path="/reducerconcept1" element={<CounterOne />}/>
        <Route path="/reducerconcept2" element={<CounterTwo />}/>
        <Route path="/reducerconcept3" element={<CounterThree />}/>
        <Route path="/reducercontext" element={<ComponentA />}/>
        <Route path="/useref" element={<UseRef />}/>
      </Routes>
      </CountContext.Provider>
        
    </div>
  );
}

export default App;

// when we dont want rereduring in app