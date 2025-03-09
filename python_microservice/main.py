from fastapi import FastAPI
from retell import Retell
import asyncio
from pydantic import BaseModel
import joblib
import numpy as np
import requests
from dotenv import load_dotenv
import os

load_dotenv()
OVERRIDE_AGENT_ID = os.getenv("OVERRIDE_AGENT_ID")
RETELL_URL = "https://api.retell.ai/v2/create-phone-call"
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

@app.post("/predict")
async def predict_fraud(transaction: Transaction):
    numeric_features = np.array(
        [
            [
                transaction.amount,
                transaction.hour,
                transaction.avg_amount_last_10,
                transaction.num_tx_last_7h,
                transaction.time_since_last_tx,
                transaction.home_location_match,
            ]
        ]
    )

    categorical_features = np.array([[transaction.location]])

    numeric_scaled = scaler.transform(numeric_features)
    categorical_encoded = encoder.transform(categorical_features)
    X_input = np.hstack([numeric_scaled, categorical_encoded])

    # Get prediction for the model
    prediction = model.predict(X_input)[0]

    call_response = None
    if prediction == 1:
        from_number = "+15054216680"  # +1 (505) 421-6680
        to_number = "+13473488237"  # +1 (347) 348-8237

            # "override_agent_id": OVERRIDE_AGENT_ID,

        client = Retell(
            api_key=RETELL_API_KEY,
        )

        try:
            call_response = client.call.create_phone_call(
                from_number=from_number,
                to_number=to_number,
            )
        except Exception as e:
            call_response = {"error": str(e)}

    return {"fraud": int(prediction), "retell_response": call_response}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=10000)
