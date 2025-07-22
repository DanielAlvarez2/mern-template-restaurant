import { useState, useEffect } from 'react'
export default function App() {
  const BASE_URL = (process.env.NODE_ENV == 'production') ? 'https://mern-template-restaurant.onrender.com' : 'http://localhost:5174'
  const [dinnerItems, setDinnerItems] = useState([])
  const getDinnerItems = ()=>{
    fetch(`${BASE_URL}/api/dinner`)
      .then(res=>res.json())
      .then(json=>setDinnerItems(json))
      .catch(err=>console.log(err))
  }
  useEffect(()=>getDinnerItems(),[])
  return (
    <>
      {dinnerItems.map(data=>{
        return(
          <div>
            {data.name}
          </div>
        )
      })}
    </>
  )
}
