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
```
export default defineConfig({  
  plugins: [react()],  
  server:{  
    proxy:{  
      '/api':'http://localhost:####'  /BACKEND PORT/   
    }  
  }  
})  
```
    
/frontend/src/App.jsx  
```
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
```

Render.com  
+ Add New > Web Service  
Select GitHub Repo from Dropdown Menu  
Root Directory: ./backend  
Build Command: backend/ $ npm install  
Start Command: backend/ $ node server.js  
Select: "Free $0/month"  
Environment Variables: MONGODB_URI copy from .env file  
DEPLOY WEB SERVICE  
    
Netlify.com  
Add new project > Import an existing project  
Select GitHub  
Select Repo  
Base directory: frontend  
Build command: npm run build  
Publish directory: frontend/dist  
Add environment variables  
Key: REACT_APP_BACKEND_URL  
Value: copy url from Render  
Click Deploy  






  

