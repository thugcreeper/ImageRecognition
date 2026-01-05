# ImageRecognition
練習影像辨識、n8n、CI/CD、github actions等

#專案架構

```
image-recognition/
├─ backend/
│  ├─ main.py              # FastAPI 入口
│  ├─ api/
│  │  ├─ __init__.py
│  │  ├─ routes.py         # HTTP API (upload / predict)
│  ├─ core/
│  │  ├─ config.py         # 設定檔（model path、env）
│  ├─ models/
│  │  ├─ __init__.py
│  │  ├─ inference.py      # 推論邏輯（model(image)）
│  │  ├─ loader.py         # 載入模型（Torch / TF）
│  ├─ schemas/
│  │  ├─ response.py       # Pydantic 回傳格式
│  ├─ utils/
│  │  ├─ image.py          # 圖像前處理（resize、normalize）
│  └─ services/
│     ├─ predict.py        # API 與模型中介層
│
├─ model/
│  ├─ model.pt / model.onnx
│
├─ tests/
│  ├─ test_predict.py
│
├─ frontend/
│  ├─node_modules
│  ├─public
│  ├─src
├─ requirements.txt
├─ README.md
└─ .env
```
