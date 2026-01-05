import React from "react"
import "./profilePage.css"

interface ProfilePageProps {
  username: string
  onLogout: () => void
}

const ProfilePage: React.FC<ProfilePageProps> = ({ username, onLogout }) => {
  return (
    <div className="profile-container">
      <h1>個人資料</h1>
      <div className="profile-card">
        <p><strong>帳號:</strong> {username}</p>
        <p><strong>Email:</strong> {username}@example.com</p>
        <p><strong>角色:</strong> 使用者</p>
        <button onClick={onLogout}>登出</button>
      </div>
    </div>
  )
}

export default ProfilePage
