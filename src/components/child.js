import React, { Component } from 'react'

class child extends Component {
    constructor(){
        super();
        this.state={
            age:20,
        }
        console.log("child constructor");
    }
    componentDidMount(){
        console.log("child componentDidMount");
    }
    componentWillUnmount(){
      console.log("child componentWillUnmount");
    }
    componentDidUpdate(){
        console.log("child componentDidUpdate");
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("Child shouldComponentUpdate",this.state);
        if(this.state.age !== nextState.age){
            return true;
        }
        else return false
    }
  render() {
    console.log("child render");
    return (
      <div>
        <h1>{this.state.age}</h1>
        <button style={{margin:"30px"}} onClick={()=>this.setState({age:40})}>Update Age</button>
      </div>
    )
  }
}
export default child