# PART 1 dependencies
import random
import numpy as np
import pandas as pd
from datetime import datetime, timedelta
import joblib
import asyncio

# PART 2 dependencies
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from xgboost import XGBClassifier

# PART 3 testing dependencies
from sklearn.metrics import accuracy_score, precision_score, recall_score, confusion_matrix

# STAGE 1 - Synthetic Data Generation in order to make inference model work with location
def generate_synthetic_transactions(num_of_transactions=1000, fraud_prob=0.02):
    home = "NY"
    other_states = [s for s in ["NY", "CA", "TX", "FL", "IL"] if s != home]
    transactions = []
    
    # Start time for simulation
    current_time = datetime.now()
    
    for i in range(num_of_transactions):
        if i % 100 == 0:
            print(f'loop #{i}')

        # Random gap between transactions (0.5 to 24 hours)
        gap_hours = random.uniform(0.5, 24)
        current_time += timedelta(hours=gap_hours)
        
        # Determine if this transaction is fraudulent
        is_fraud = random.random() < fraud_prob
        
        if is_fraud:
            # Fraudulent transaction features:
            amount = max(np.random.normal(300, 50), 1)  # high amount
            location = random.choice(other_states)      # force non-home location
            hour = random.randint(2, 6)                  # off-hours (e.g. 2am-6am)
        else:
            # Normal transaction features:
            amount = max(np.random.normal(50, 10), 1)
            location = home if random.random() < 0.9 else random.choice(other_states)
            hour = random.randint(8, 22)                 # typical business hours
        
        # Compute aggregated features using previous transactions:
        # avg_amount_last_10: average amount of the last 10 transactions (or fewer if <10)
        if transactions:
            last_tx = transactions[-10:]
            avg_amount_last_10 = np.mean([tx["amount"] for tx in last_tx])
        else:
            avg_amount_last_10 = amount
        
        # num_tx_last_7h: count how many previous transactions occurred within the last 7 hours
        count_7h = 0
        for tx in transactions:
            delta = (current_time - tx["timestamp"]).total_seconds() / 3600.0
            if delta <= 7:
                count_7h += 1
        
        # time_since_last_tx: hours since the previous transaction
        if transactions:
            # in hours
            time_since_last_tx = (current_time - transactions[-1]["timestamp"]).total_seconds() / 3600.0
        else:
            # handle first transaction
            time_since_last_tx = gap_hours
        
        # home_location_match: 1 if transaction location equals home, else 0
        home_location_match = 1 if location == home else 0
        
        transactions.append({"timestamp": current_time,
            "amount": round(amount, 2),
            "location": location,
            "hour": hour,
            "avg_amount_last_10": round(avg_amount_last_10, 2),
            "num_tx_last_7h": count_7h,
            "time_since_last_tx": round(time_since_last_tx, 2),
            "home_location_match": home_location_match,
            "fraud": int(is_fraud)
        })
    
    df = pd.DataFrame(transactions)
    return df

# Generate the synthetic dataset
df = generate_synthetic_transactions(1000, 0.02)
df.to_csv('dataset/synthetic_transactions.csv', index=False)

print("Synthetic dataset shape:", df.shape)
print("Fraud distribution:\n", df["fraud"].value_counts())

# PART 2 - Data preprocessing and training model
features = ["amount", "hour", "avg_amount_last_10", "num_tx_last_7h", "time_since_last_tx", "home_location_match", "location"]

X = df[features]
y = df["fraud"]

numerical_cols = ["amount", "hour", "avg_amount_last_10", "num_tx_last_7h", "time_since_last_tx", "home_location_match"]
categorical_cols = ["location"]

# Drop time stamp (only used for context) and use fraud as label
# Standardize numeric features
# Each column, the rows values you take the mean and standard dev
# X' = (X - mean) / std dev
scaler = StandardScaler()
X_numeric = scaler.fit_transform(X[numerical_cols])

encoder = OneHotEncoder(sparse_output=False)
X_cat = encoder.fit_transform(X[categorical_cols])

# Processed features to train model
X_processed = np.hstack([X_numeric, X_cat])

# stratify used to fix the bug 
# where train or test may be inbalanced
# need to keep fraud data points as little as possible
# 90 to 10 percent
X_train, X_test, y_train, y_test = train_test_split(
    X_processed, 
    y, 
    test_size=0.2, 
    random_state=42,
    stratify=y
)

pos_weight = float(np.sum(y_train == 0) / np.sum(y_train == 1))

model = XGBClassifier(
    objective='binary:logistic',
    eval_metric='auc',
    n_estimators=200,
    max_depth=5,
    learning_rate=0.1,
    scale_pos_weight=pos_weight
)

model.fit(X_train, y_train)

# PART 3 - Testing the model
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred, zero_division=0)
recall = recall_score(y_test, y_pred, zero_division=0)
conf_matrix = confusion_matrix(y_test, y_pred)

print("\nModel Evaluation:")
print(f"Accuracy: {accuracy:.4f}")
print(f"Precision: {precision:.4f}")
print(f"Recall: {recall:.4f}")
print("Confusion Matrix:")
print(conf_matrix)

# Save model, scaler, and encoder
joblib.dump(model, "xgb_fraud_model.pkl")
joblib.dump(scaler, "scaler.pkl")
joblib.dump(encoder, "encoder.pkl")