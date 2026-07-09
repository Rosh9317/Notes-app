import React, { useEffect,useState } from 'react'


const Useeffect = () => {

     const [num, setNum] = useState(0)

     const increment=()=>{
        setNum(num+1)
     }
 
  useEffect(function(){
    console.log("typing...")
  },[])
     


  return (
    <div>
        <h1>The value is {num}</h1>
        <button onClick={increment}>click</button>
    </div>
  )
}

export default Useeffect