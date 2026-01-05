import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./loginPage.css"

interface LoginPageProps {
    //宣告名為onLogin的函數，參數為username，無返回值
  onLogin: (username: string) => void
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // 假驗證：username = test, password = 123
        if (username === "test" && password === "123") {
        onLogin(username)
        } else {
        setError("帳號或密碼錯誤！")
        }
    }

    return (
        <div className="login-container">
        <h1>登入</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="帳號"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            />
            <input
            type="password"
            placeholder="密碼"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            />
            <button type="submit">登入</button>
        </form>
        {error && <div className="error">{error}</div>}
        </div>
    )
}

export default LoginPage
