import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route pat='login' element={<LogIn/>}/>
      <Route pat='singup' element={<SingUp/>}/>
      <Route pat='error' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
