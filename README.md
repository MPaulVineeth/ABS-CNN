# ABS-CNN 🚦📊  
Abnormal Traffic Detection Based on Attention and Big Step Convolution

---

## 🧠 Overview

**ABS-CNN** is a web-based application powered by a deep learning model to detect **abnormal network traffic** using an Attention mechanism and Big Step Convolution. This project is based on the research paper:

> *Abnormal Traffic Detection Based on Attention and Big Step Convolution*

The goal is to provide an interactive, web-friendly platform to showcase real-time abnormal traffic detection using modern web and AI technologies.

---

## 🌐 Web App Features

- ⚡ Built with **Next.js 14 (App Router)** and **Tailwind CSS**
- 📊 Integrates with **ABS-CNN deep learning model**
- 🌟 Real-time input simulation (planned)
- 📁 Modular architecture using `components/`, `hooks/`, `lib/`
- 🍥 Stylish UI with custom `styles/` and Tailwind

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router), Tailwind CSS, TypeScript
- **Model Backend (Optional):** TensorFlow / Python API (Flask or FastAPI)
- **Other Tools:** ESLint, Prettier, GitHub

---

## 📂 Folder Structure

```bash
ABS-CNN/
├── app/               # Next.js app router structure
├── components/        # Reusable UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility libraries and config
├── public/            # Static files (images, etc.)
├── styles/            # Global and custom styles
├── README.md
├── next.config.mjs    # Next.js config
├── tailwind.config.ts # Tailwind CSS config
├── tsconfig.json      # TypeScript config
└── package.json       # Project metadata & scripts
```

---

## 🧪 Getting Started

1. Clone the repo

```bash
git clone https://github.com/MPaulVineeth/ABS-CNN.git
cd ABS-CNN
```

2. Install dependencies

```bash
npm install
# or
pnpm install
```

3. Run the development server

```bash
npm run dev
```

4. Open `http://localhost:3000` to see the app in action.

---

## 📊 Model Integration (Coming Soon)

> The ABS-CNN model backend will be integrated using a Python REST API to allow real-time detection and visualization.

- Backend API (Flask/FastAPI)
- Model endpoint to classify traffic as normal/abnormal
- Streamlit demo page (optional)

---

## 💡 Future Enhancements

- 🔌 Connect to real packet capture streams
- 🌐 Deploy model + frontend for public access
- 📱 Add responsive design and mobile support
- 📊 Visual charts for network traffic analytics

---

## 🤝 Contributions

Want to contribute? Feel free to fork the repo and submit a pull request. Bug fixes, feature additions, or UI improvements are welcome!

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**M Paul Vineeth**  
[GitHub](https://github.com/MPaulVineeth) | [LinkedIn](https://www.linkedin.com/in/paul-vineeth-531336220)

