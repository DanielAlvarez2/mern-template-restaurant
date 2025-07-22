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
\+ Add New > Web Service  
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
Project Name: defaults to silly name  
Base directory: frontend  
Build command: npm run build  
Publish directory: frontend/dist  
Add environment variables  
Key: REACT_APP_BACKEND_URL  
Value: copy url from Render  
Click Deploy  
  
/backend $ npm i cors  
/backend/server.js  `app.use(cors())`  

/frontend/src/App.jsx  
```
export default function App() {
  const BASE_URL =  (process.env.NODE_ENV == 'production') ? 
                    'https://mern-template-restaurant.onrender.com' : 
                    'http://localhost:5174'
  const getDinnerItems = ()=>{
    fetch(`${BASE_URL}/api/dinner`)

```
/frontend $ npm i react-router  
  
/frontend/src/main.jsx  
```
import ReactDOM from 'react-dom/client'
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router'
import App from './App.jsx'
import Test from './Test.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
```
/frontend/public/_redirects `/* /index.html 200`  
    
/frontend/src/Test.jsx  
```
export default function Test(){
    return <h1>TEST PAGE</h1>
}
```





  

