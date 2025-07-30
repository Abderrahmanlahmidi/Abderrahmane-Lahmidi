import { RouterProvider } from "react-router-dom"
import { router } from "./router/routes"
import CursorFollower from "./components/CursorFollower";

function App() {
  return (
    <div>
      <CursorFollower/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App