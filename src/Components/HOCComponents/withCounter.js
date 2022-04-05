import React from "react"
function withCounter (Wrapper){
    class Counter extends React.Component{
        constructor(props){
            super(props)
            this.state={count:0}
        }
        increment = ()=>{
            this.setState(prevState=>{
                return {count: prevState.count+1}
            })
        }
        render(){
            return(
                <Wrapper count={this.state.count} increment={this.increment} />
            )
        }
    }
    return Counter
}
export default withCounter