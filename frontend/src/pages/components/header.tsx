import React from "react"
import { useNavigate } from "react-router-dom"
import "./Header.css"

interface HeaderProps {
  username?: string // ?表示這個屬性是可選的
}
//HeaderProps 為介面，定義了 Header 元件可以接受的屬性。在這裡，它有一個可選的屬性 username，類型是 string。
const Header: React.FC<HeaderProps> = ({ username }) => {
    const navigate = useNavigate()
    return (
        <header className="header">
        <div className="userProfile" onClick={() => navigate("/userProfile")}>
            <svg
            fill="#000000"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="icon user-icon"
            >
            <path
                d="M21,20a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2,6,6,0,0,1,6-6h6A6,6,0,0,1,21,20Zm-9-8A5,5,0,1,0,7,7,5,5,0,0,0,12,12Z"
            />
            </svg>
            {username && <span className="username">{username}</span>}
        </div>

        <div className="login" onClick={() => navigate("/login")}>
            <svg
            width="32px"
            height="32px"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            >
            <rect width="16" height="16" fill="none" />
            <path d="M14,14l0,-12l-6,0l0,-2l8,0l0,16l-8,0l0,-2l6,0Zm-6.998,-0.998l4.998,-5.002l-5,-5l-1.416,1.416l2.588,2.584l-8.172,0l0,2l8.172,0l-2.586,2.586l1.416,1.416Z" />
            </svg>
        </div>
        </header>
    )
}

export default Header
