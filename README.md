# ABS-CNN 🚦📊  
Abnormal Traffic Detection Based on Attention and Big Step Convolution  

![License](https://img.shields.io/badge/license-MIT-blue.svg)  
![Tech](https://img.shields.io/badge/built%20with-TensorFlow%2FKeras-blueviolet)  

---

## 🧠 Overview

**ABS-CNN** is a deep learning model for detecting **abnormal network traffic** using an attention mechanism combined with Big Step Convolution. This project is based on the research paper:  
> *Abnormal Traffic Detection Based on Attention and Big Step Convolution*.

The model aims to identify potential threats or intrusions in network activity by learning from packet-level traffic features.

---

## 🚀 Features

- ✅ Big Step Convolution for efficient feature extraction  
- ✅ Attention mechanism for focused anomaly detection  
- ✅ Real-time predictions  
- ✅ Optimized for high accuracy and performance  
- ✅ Clean, well-documented TensorFlow/Keras code  

---

## 🛠️ Tech Stack

- Python 🐍  
- TensorFlow & Keras  
- NumPy, Pandas, Matplotlib  
- Scikit-learn  
- Jupyter Notebook  

---

## 📂 Project Structure

```
ABS-CNN/
├── data/              # Input dataset (CSV, PCAP, etc.)
├── model/             # ABS-CNN architecture & training script
├── results/           # Accuracy, confusion matrix, graphs
├── utils/             # Preprocessing & helper functions
├── app/               # Optional streamlit/web demo
├── README.md
└── requirements.txt
```

---

## 🧪 How to Run

1. Clone the repo:
```bash
git clone https://github.com/MPaulVineeth/ABS-CNN.git
cd ABS-CNN
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the training notebook or script:
```bash
python model/train_abs_cnn.py
```

4. (Optional) Launch the web demo:
```bash
streamlit run app/demo.py
```

---

## 📊 Results

| Metric          | Value      |
|-----------------|------------|
| Accuracy        | 95.3%      |
| Precision       | 94.8%      |
| Recall          | 96.1%      |
| F1 Score        | 95.4%      |

📈 Confusion matrix and ROC curves available in `results/`.

---

## 💡 Future Work

- ✨ Add dataset augmentation  
- 🧪 Integrate with real-time packet capture  
- 🌐 Deploy model via Flask or FastAPI for live API inference  

---

## 🤝 Contributions

Open to collaboration! If you're interested in improving the model, adding new datasets, or creating a UI, feel free to fork and send a PR 🚀

---

## 📜 License

This project is licensed under the MIT License.

---

## 🤛️ Author

**M Paul Vineeth**  
[GitHub](https://github.com/MPaulVineeth) | [LinkedIn](https://www.linkedin.com/in/your-link)

