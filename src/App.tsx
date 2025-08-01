import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DashBoard } from "./pages/DashBoard"
import { SignUp } from "./pages/SignUp"
import { SignIn } from "./pages/SignIn"
import { ModeChange } from "./components/modeChange"
import { useEffect } from "react"
import { HeroPage } from "./pages/HeroPage"

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<DashBoard isShared={false}  sideItemType="tweets"/>} />
        <Route path="/:hash" element={<DashBoard isShared={true} sideItemType="tweets" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
