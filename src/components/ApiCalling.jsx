import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const ApiCalling = () => {
 const [data, setData] = useState([])

  async function getdata () {
    const response = await axios.get('https://randomuser.me/api/')
    setData(response.data.results)
  }

  return (
    <div>

      <button onClick={getdata}>
        click here for data
      </button>
  
   {data.map((elem, idx) => {
        return (
          <div key={idx}>

            <h1>{elem.name.first}</h1>
            <h1>{elem.location.timezone.description}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default ApiCalling