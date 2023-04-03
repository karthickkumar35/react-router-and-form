import React, { useState } from 'react'

const Form = () => {
    const [inpName,setName]=useState('')
    const [inpDes,setDes]=useState('')
    const [isCompleted,setIsCompleted]=useState('false')
    const [formSub,setFormsub]=useState(false)
    const [isAnswer,setAnswer]=useState([]);
  

    const inputName=(e)=>{
         console.log("e",e.target.value)
         setName(e.target.value)
    }
    const inputDes=(e)=>{
        console.log("e",e.target.value)
        setDes(e.target.value)
   }
    const checked=(e)=>{
        setIsCompleted(e.target.checked?"true":"false")
    }
    const sub=(e)=>{
        e.preventDefault();
        setFormsub('true')
          console.log(inpName,inpDes)
        setAnswer([...isAnswer,{Name:inpName, Description:inpDes, Answer:isCompleted}])
    }
  return (
    <div>
        <form onSubmit={sub}>
            <input className="input" name='name' value={inpName} onChange={inputName} />
            {inpName==="" && formSub && <div className='errorMsg'>The Name Is Required</div>}
            <input className="input" name='des' value={inpDes} onChange={inputDes} />    
            {inpDes==="" && formSub &&<div className='errorMsg'>The Des Is Required</div>}      
            <input type='checkbox' value={isCompleted} onChange={checked}  id='checkbox'/>
            <label name='checkbox'>Its Completed</label>
            <input className="input link" type={"submit"}></input>
        </form>
        <div>
            {isAnswer.map((value,index)=>{
              return  <div className='outputBox' key={index}>
                <h2 className='content'>Name : {value.Name}</h2>
                <h3 className='content'>Description : {value.Description}</h3>
                <h4 className='content'>checked : {value.Answer}</h4>
                </div>
            })
            }
        </div>
    </div>
  )
}

export default Form