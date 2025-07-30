import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Resume from "../pages/Resume.jsx";

export const router = createBrowserRouter([
    
    { 
     path:"/",
     element:<Home/>
     },
    { 
     path:"/contact",
     element:<Contact/>
     },
    { 
     path:"/resume",
     element:<Resume/>
     },
])