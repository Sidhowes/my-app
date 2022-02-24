/*import React from 'react'
const Home = () => {
  return (
    <div className="container">
    
    <h1 className="text-center" style={{paddingTop: "30%"}}>
      Home
    </h1>
    
  </div>
  )
}
export default Home;*/


import React,{Component} from 'react';

export class Home extends Component{

    render(){
        return(
            <div className="mt-5 d-flex justify-content-left">
                This is Home page.
            </div>
        )
    }
}