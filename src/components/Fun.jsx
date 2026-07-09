import React from 'react'

const Fun = () => {
  
  function changing(val){
    console.log(val)
  }


  return (
    // <input onChange= {
    //   (elem)=>{
    //   changing(elem.target.value)
    //   }
    // } type="text" placeholder='name' />
    
    <div onMouseMove={function(ele){
      console.log(ele.clientX)
    }} className='box'></div>
  )
}

export default Fun
