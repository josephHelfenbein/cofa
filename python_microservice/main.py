from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np
import requests
from dotenv import load_dotenv
import os

load_dotenv() 
OVERRIDE_AGENT_ID = os.getenv("OVERRIDE_AGENT_ID")
RETELL_URL = os.getenv("RETELL_URL")
RETELL_API_KEY = os.getenv("RETELL_API_KEY")

app = FastAPI()

model = joblib.load("xgb_fraud_model.pkl")
scaler = joblib.load("scaler.pkl")
encoder = joblib.load("encoder.pkl")

class Transaction(BaseModel):
    amount: float
    hour: int
    avg_amount_last_10: float
    num_tx_last_7h: int
    time_since_last_tx: float
    home_location_match: int
    location: str
    phone_number: str = None

@app.post("/predict")
async def predict_fraud(transaction: Transaction):
    numeric_features = np.array([[
        transaction.amount,
        transaction.hour,
        transaction.avg_amount_last_10,
        transaction.num_tx_last_7h,
        transaction.time_since_last_tx,
        transaction.home_location_match
    ]])

    categorical_features = np.array([[transaction.location]])

    numeric_scaled = scaler.transform(numeric_features)
    categorical_encoded = encoder.transform(categorical_features)
    X_input = np.hstack([numeric_scaled, categorical_encoded])

    # Get prediction for the model
    prediction = model.predict(X_input)[0]

    call_response = None
    if prediction == 1:
        
        from_number = "+15054216680"  # +1 (505) 421-6680
        to_number = "+13473488237"    # +1 (347) 348-8237

        headers = {
            "Authorization": f"Bearer {RETELL_API_KEY}",
            "Content-Type": "application/json"
        }

        payload = {"from_number": from_number,
                   "to_number": to_number,
                   "override_agent_id": OVERRIDE_AGENT_ID
                }
        
        try:
            retell_api_response = requests.post(RETELL_URL, json=payload, headers=headers)
            if retell_api_response.status_code == 201:
                call_response = retell_api_response
            else:
                call_response = {
                    "error": "Retell API call failed",
                    "status_code": retell_api_response.status_code,
                    "detail": retell_api_response.text
                }
        except Exception as e:
            call_response = {"error": str(e)}
    
    return {"fraud": int(prediction), "retell_response": call_response}
    


