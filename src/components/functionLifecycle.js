import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import FunctionLifecycleChild from './functionLifecycleChild';

const FunctionLifecycle = () => {
    const [name1,setName] = useState("Hooks");
    const [age,setAge] = useState(20);
    const [show,setShow]=useState(true);
    const [count,setCount] = useState(1)

    useEffect(()=>{
        console.log("function update")   // every render it tigger
    })
    let timer;
    useEffect(()=>{
        console.log("function update didmount");
        // timer = setInterval(()=>{
        //     console.log("timer")
        //     setCount((pre)=>pre+1);
        // },1000);
        // it like componentdidmount only one time tigger
    },[])
    useEffect(()=>{
        return()=>{
            console.log("function will unmount");
        // clearInterval(timer)
        };
    },[]);
    useEffect(()=>{
        console.log("function update didmount update")   // it like componentdidupdate and which one(age only)
    },[age]);
    const nav = useNavigate();
    const goFun = ()=>{
      nav("/?id=931849&name=class")
    }

    const params = useParams();
      console.log(params);
    const seachParam = useSearchParams();  
    console.log(seachParam)
  return (
    <div>
      <h2>{name1}{age}{count}</h2>
      <button onClick={()=>setName("karthick")}>update name</button>
      <button onClick={()=>setName("king")}>update name 2</button>
      <button onClick={()=>setAge(21)}>update age</button>
      <button onClick={()=>setShow(!show)}>show/hide</button>
      <h3>{show?<FunctionLifecycleChild/>:null}</h3>
      <button onClick={()=>goFun()}>view class lifecyle</button>
    </div>
  )
}

export default FunctionLifecycle
