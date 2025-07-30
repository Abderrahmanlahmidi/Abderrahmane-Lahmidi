import { RouterProvider } from "react-router-dom"
import { router } from "./router/routes"
import CursorFollower from "./components/CursorFollower";
import GoInTop from "./components/GoInTop";


function App() {
  return (
    <div>
      <CursorFollower/>
      <GoInTop/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App