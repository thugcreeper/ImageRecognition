import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/login/loginPage"
import ProfilePage from "./pages/userProfile/profilePage"
import HomePage from "./pages/home/homePage"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={(username) => {
          console.log("使用者登入:", username)
        }} />} />
        <Route path="/userProfile" element={<ProfilePage username="test" onLogout={() => {
          console.log("使用者登出")
        }} />} />
        
      </Routes>
    </Router>
  )
}

export default App
