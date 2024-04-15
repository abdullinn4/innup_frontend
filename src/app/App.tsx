
import './App.sass'
import AppRouter from "./AppRouter.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  )
}

export default App
