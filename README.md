# 🚀 Cypress Automation for Naukri Profile Update

## 📌 Overview
This project automates the Naukri.com profile update process using **Cypress** with the **Cucumber BDD framework**. It includes login, profile navigation, and resume upload functionalities.

## 🛠 Tech Stack
- **Cypress** (End-to-end testing framework)
- **Cucumber BDD** (For writing feature files)
- **JavaScript** (Test scripting)
- **GitHub Actions** (For CI/CD automation)

## 📂 Project Structure
```
├── cypress
│   ├── e2e
│   │   ├── updateProfile.feature  # Feature file
│   ├── fixtures
│   │   ├── credentials.json       # Contains login credentials (hidden in CI/CD)
│   │   ├── Kiran_Resume_QA.pdf    # Resume file for upload
│   ├── support
│   │   ├── step_definitions       # Step definitions for feature file
├── .github
│   ├── workflows
│   │   ├── cypress.yml            # GitHub Actions workflow for scheduling runs
├── cypress.config.js               # Cypress configuration file
├── package.json                    # Project dependencies
└── README.md                        # Project documentation
```

## 🏗 Setup & Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Run Cypress Tests Locally**
```sh
npx cypress open  # Opens Cypress Test Runner
tnpx cypress run   # Runs tests in headless mode
```

## 🚀 Running Tests on GitHub Actions
This project is scheduled to run **every day at 5:30 AM IST** with a retry mechanism **after 15 minutes** if it fails.
- Configuration is in `.github/workflows/cypress.yml`

## 🔐 Handling Credentials
- Use **GitHub Secrets** to store credentials securely.
- Do **not** store sensitive data in `credentials.json`.

## 📌 Key Features
✅ Automated login to Naukri.com
✅ Profile navigation
✅ Resume upload verification
✅ Scheduled execution with retry on failure

## 🤝 Contributing
1. **Fork** this repository
2. **Create** a feature branch (`git checkout -b feature-branch`)
3. **Commit** changes (`git commit -m 'Added new feature'`)
4. **Push** to GitHub (`git push origin feature-branch`)
5. **Create** a pull request 🚀

## 📜 License
This project is open-source and available under the **MIT License**.

---
✨ Happy Testing with Cypress! 🚀
