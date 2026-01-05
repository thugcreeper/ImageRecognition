// src/pages/HomePage.tsx
import React, { useState } from "react"
import Header from "../components/header"
import "./homePage.css"

const HomePage: React.FC = () => {
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [result, setResult] = useState<string>("")
  const [history, setHistory] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setImage(file)
    setPreview(URL.createObjectURL(file))
    setResult("")
  }

  const handlePredict = async () => {
    if (!image) return

    const formData = new FormData()
    formData.append("file", image)

    setLoading(true)

    try {
      const res = await fetch("http://localhost:8000/api/predict", {
        method: "POST",
        body: formData,
      })
      const data = await res.json()
      const resText = data.result ?? "辨識失敗"
      setResult(resText)
      setHistory(prev => [resText, ...prev])
    } 
    catch (err) {
      setResult("後端是不是又被你搞炸了？")
    } 
    finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <Header />
      <h1>影像辨識系統</h1>
      <p className="subtitle">
        上傳圖片，讓 AI 告訴你這是什麼。支援 jpg / png 圖片格式。
      </p>

      <input type="file" accept="image/*" onChange={handleImageChange} />

      {preview && (
        <img src={preview} alt="preview" className="preview" />
      )}

      <button onClick={handlePredict} disabled={!image || loading}>
        {loading ? "辨識中..." : "開始辨識"}
      </button>

      {result && (
        <div className="result">
          <strong>辨識結果：</strong> {result}
        </div>
      )}

      {history.length > 0 && (
        <div className="history">
          <h2>歷史辨識結果</h2>
          <ul>
            {history.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}

      <footer></footer>
    </div>
  )
}

export default HomePage
