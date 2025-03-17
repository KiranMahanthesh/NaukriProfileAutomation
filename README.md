# GitHub Repository Integrated with Jenkins for Cypress Test Run

## 🚀 Project Overview

This project is designed to automate the Naukri profile update using **Cypress** with the **Cucumber BDD framework**. The automation pipeline can be triggered to run at your convenience through **Jenkins CI/CD pipeline** or scheduled through **cron jobs**.

---

## 🛠️ Tools and Technologies Used

- **Cypress (Automation Tool)**
- **Cucumber BDD Framework (Behavior-Driven Development)**
- **Jenkins (CI/CD Pipeline)**
- **GitHub (Version Control System)**
- **NodeJS (Runtime Environment)**

---

## ✅ Steps to Set Up

1. Clone the repository:
   ```sh
   git clone https://github.com/KiranMahanthesh/NaukriProfileAutomation.git
   cd NaukriProfileAutomation
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up credentials securely in Jenkins credentials manager:
   - `NAUKRI_EMAIL`: Your **Naukri login email** 📧
   - `NAUKRI_PASSWORD`: Your **Naukri password** 🔑
4. Install and configure Jenkins.
5. Create a Jenkins pipeline job and connect it to the GitHub repository.
6. Run the pipeline whenever desired or schedule it through **cron jobs**.

---

## ✅ Cypress Execution Flow

1. Checkout the repository from GitHub.
2. Install project dependencies.
3. Install and verify Cypress binary.
4. Run Cypress tests with credentials passed as environment variables.
5. Capture screenshots and videos on failure.
6. Archive Cypress artifacts for debugging.

---

## ✅ Output and Reporting

- Cypress screenshots and videos are captured on test failure.
- Test results are archived and accessible via Jenkins.

---

## 🎯 Future Scope

- Better error handling.
- Further enhancements on the scripts.
- Resolving Cypress cache issue which is taking more time to install.
- Cloud-based run (e.g., GitHub or AWS).
- Email notification.

---

## 🚀 Conclusion

With this CI/CD pipeline, you can ensure **seamless Naukri profile updates** and **automated tests running efficiently.** ✅

---

## 👨‍💻 Author
Developed by **Kiran Mahanthesh** ❤️


