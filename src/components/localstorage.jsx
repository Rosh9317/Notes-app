import React from 'react'

const Localstorage = () => {

 const user={
  Name: 'aai',
  age:25,
  city: 'nasshik'
}

localStorage.setItem('user', JSON.stringify(user))

let amd =  JSON.parse(localStorage.getItem('user'))

console.log(amd.Name)



  return (
    <div></div>
  )
}

export default Localstorage