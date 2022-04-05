import React from "react"
function GrayScale (Wrapper){
    class Comp extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
            return(
                <Wrapper style={{filter: "grayscale(1)"}}   />
            )
        }
    }
    return Comp;
}
export default GrayScale