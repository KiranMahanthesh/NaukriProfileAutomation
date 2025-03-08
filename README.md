# 🚀 Naukri Profile Automation 🤖

## 🌟 Overview
This project automates the process of updating the resume on **Naukri.com** using **Cypress** and **Cucumber BDD Framework**. It includes scheduling a **daily run** via **GitHub Actions** to ensure your profile stays **fresh and active**. 💼✨


---

## 🔥 Features
✅ **Automated Login** using **Cypress** 🏆
✅ Navigates to the **Profile Section** 🔍
✅ Uploads a fresh **resume file** 📂
✅ **Verifies successful upload** via confirmation message ✅
✅ **Runs daily at 5:30 AM IST** ⏰ using **GitHub Actions**
✅ **Retry Mechanism:** Auto-retries in **15 mins** if failed 🔄

---

## 📌 Prerequisites
- ⚡ Node.js **v22.12.0** (Ensure your local version matches the GitHub Actions setup)
- 🏗️ Cypress installed (`npm install cypress`)
- 🔐 GitHub repository access
- 📝 Naukri.com account with valid credentials

---

## 🚀 Installation
1️⃣ Clone the repository:
   ```sh
   git clone https://github.com/KiranMahanthesh/NaukriProfileAutomation.git
   cd NaukriProfileAutomation
   ```
2️⃣ Install dependencies:
   ```sh
   npm install
   ```
3️⃣ Set up credentials securely using **GitHub Secrets**:
   - `NAUKRI_EMAIL`: Your **Naukri login email** 📧
   - `NAUKRI_PASSWORD`: Your **Naukri password** 🔑

---

## 🏃 Running Tests Locally
To execute the automation script locally:
```sh
npx cypress run
```
Or open Cypress GUI:
```sh
npx cypress open
```

---

## 🛠️ GitHub Actions - CI/CD Setup
This project includes a **GitHub Actions workflow** that:
✅ Runs the script **daily at 5:30 AM IST** ⏰
✅ **Retries execution once after 15 minutes** if the first attempt fails 🔄

Workflow file: `.github/workflows/cypress.yml`

### 🚀 Triggering a Manual Run
1️⃣ Go to **Actions** tab in the GitHub repository 📂
2️⃣ Select the latest **Cypress Test Run** 🎯
3️⃣ Click **Run workflow** ▶️

---

## 🏗️ Cypress Test Flow
1️⃣ **Login** to Naukri with credentials 🔑
2️⃣ Navigate to the **Profile Section** 📂
3️⃣ Click on **Update Resume** 🔄
4️⃣ Upload the **resume file** (`Kiran_Resume_QA.pdf`) 📎
5️⃣ Validate **success message** (`Resume has been successfully uploaded.`) ✅
6️⃣ **Stop execution** using `Cypress.runner.stop()` ⏹️

---

## ⚠️ Troubleshooting

🔴 **Git error: 'fatal: refusing to merge unrelated histories'**
```sh
git pull origin main --allow-unrelated-histories
```

🔴 **Switch branch to `main` of correct repository**
```sh
git remote set-url origin https://github.com/KiranMahanthesh/NaukriProfileAutomation.git
git checkout main
```

---

## 🤝 Contribution
💡 Fork the repository and submit **pull requests** for enhancements & fixes! 🚀

---

## 📜 License
This project is licensed under the **MIT License** 📄

---

## 👨‍💻 Author
Developed by **Kiran Mahanthesh** ❤️


