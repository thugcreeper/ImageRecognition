from fastapi import FastAPI
from backend.api.uploadImage import router as upload_router
app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Main Backend API"}

app.include_router(upload_router, prefix="/api")