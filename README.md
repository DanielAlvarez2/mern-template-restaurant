# MERN Stack Template - Restaurant    
Deploy Front-End to Netlify    
Deploy Back-End to Render  
  
/backend  
/frontend  


POSTMAN:  
use "raw" not "form-data"  

create express api CRUD  
POST  
DELETE  
GET ALL   
GET ONE    
PUT  

/frontend  
$ create vite@latest .  

/frontend/vite.config.js  

export default defineConfig({  
  plugins: [react()],  
  server:{  
    proxy:{  
      '/api':'http://localhost:####'  /BACKEND PORT/   
    }  
  }  
})  
  
/frontend/src/App.jsx  
  
import { useState, useEffect } from 'react'  
export default function App() {  
  const [dinnerItems, setDinnerItems] = useState([])  
  const getDinnerItems = ()=>{  
    fetch('api/dinner')  
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



  

