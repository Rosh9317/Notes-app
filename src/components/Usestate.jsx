import React, { useState } from 'react'

const Usestate = () => {
 const [text, setText] = useState("")
//   const [count, setCount] = useState(0)

//   const [user, setUser] = useState({username:'Rosh', age:24})
  
//   function increment (){
//     setCount(count+1)
//   }
//   function decremet (){
//     setCount(count-1)
//   }
//   const chnagetext=()=>{
//    let newuser={...user}
//     newuser.username='trupti'
//     newuser.age=25
//     setUser(newuser)
//   }

function textget(e){
    e.preventDefault()
    console.log(text);   
    setText('')
}
 

  return (
    <div className='main' >
    
     {/* <h1>Count is {count}</h1>
     <button onClick={increment}>
        Increment</button>
        <button onClick={decremet}> 
            Decrement
        </button> */}
{/* 
 <h1>{user.username} {user.age}</h1>
 <button onClick={chnagetext}>change</button> */}



 <form
  onSubmit={(e)=>{
    textget(e)
 }}>
    <input 
   onChange={(e)=>{
    setText(e.target.value);
    console.log(text);}}
    value={text}
   type="text" placeholder='Name' />
    <button >click here</button>
 </form>
    </div>
  )
}

export default Usestate


