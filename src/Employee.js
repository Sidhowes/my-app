/*import React from 'react'
const Employees = () => {
  return (
    <div className="container">
    
      <h1 className="text-center" style={{paddingTop: "30%"}}>
        About
      </h1>
      
    </div>
  )
}
export default Employees;*/


import React,{Component} from 'react';

export class Employees extends Component{

    render(){
        return(
            <div className="mt-5 d-flex justify-content-left">
                This is Employees page.
            </div>
        )
    }
}