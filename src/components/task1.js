import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Child from './child';

class task1 extends Component {
  constructor(){
    super();
    console.log("constructor");
    this.state={
      count:1,
      name:"",
      show:true,
    }
  }
  componentDidMount(){
    console.log("componentDidMount");
    // setInterval(()=>{
    //   this.setState({count: this.state.count+1},()=>console.log(this.state.count))
    // },1000)
  }
  componentDidUpdate(prevProps,prevState){
    console.log("componentDidUpdate",this.state.count);
    if(prevState.name !== this.state.name){
      console.log("updated Name")
    }
  }
  shouldComponentUpdate(){
    return true;
  }
  
  render() {
    
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({name:"karthick"})}>Update Name</button>
        <button onClick={()=>this.setState({show:!this.state.show})}>show/hide</button>
        {this.state.show?<Child />:null}
        <Link className="link"to={"/function/634187/lifecycle"}>view function Lifecycle</Link>
        <Link className="link"to={"/form"}>form</Link>
      </div>
    )
  }
}

export default task1