import React from 'react'
import Card from './components/probs'
import Cards from './components/Cards'
import Users from './components/Users'
import Fun from './components/Fun'
import Usestate from './components/Usestate'
import Localstorage from './components/localstorage'
import Useeffect from './components/Useeffect'
import ApiCalling from './components/ApiCalling'


const App = () => {
  return (
    // <div className='parent'>
    //   <Card user='Aman Singh' age={18} img='https://images.unsplash.com/photo-1751097006268-ae4601fcb117?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    //   <Card user='Sarthak' age={28} img='https://images.unsplash.com/photo-1752801516481-cfb8c47ee9a3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    //   <Card user='Aditya' age={24} img='https://images.unsplash.com/photo-1751554933476-d029737d58b2?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    // </div>
    <>
    {/* <div className="parent">
    <Cards user="Ganu Bappa" text ="Ganpati Bappa morya pratham devatay pujnay namaha..."/>    
    <Cards user="Swami" text="Shree Swami Smarth"/>    
    <Cards user= "Aai & Pappa" text="My world aroung you"/>    
    </div> */}
    
    {/* <Users/> */}
    {/* <Fun/> */}
     {/* <Usestate/> */}
     {/* <Localstorage/> */}
     {/* <Useeffect/> */}
     <ApiCalling/>
    </>
  )
}

export default App