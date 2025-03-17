# Naukri Profile Automation Using Cypress and Jenkins

---

## Project Overview

This project is designed to automate the **Naukri profile update** using **Cypress** with the **Cucumber BDD framework**. The automation pipeline can be triggered **manually** or scheduled using **cron jobs**.

---

## Tools and Technologies Used

| Tool              | Purpose                                   |
|----------------|------------------------------------|
| **Cypress**         | Automation Testing Tool                   |
| **Cucumber BDD** | Behavior-Driven Development Framework |
| **Jenkins**          | CI/CD Pipeline Management                |
| **GitHub**           | Version Control System                    |
| **NodeJS**          | Runtime Environment                         |

---

## Steps to Set Up

### Step 1: Clone the Repository
```sh
git clone https://github.com/KiranMahanthesh/NaukriProfileAutomation.git
cd NaukriProfileAutomation
```

### Step 2: Install Dependencies
```sh
npm install
```

### Step 3: Set Up Credentials Securely
- Use **GitHub Secrets** for `NAUKRI_EMAIL` and `NAUKRI_PASSWORD` if running in **GitHub Actions**.
- Use **Jenkins Credentials Manager** if running in **Jenkins**.

### Step 4: Create a Jenkins Pipeline Job
Connect the job to the **GitHub repository**.

### Step 5: Run the Pipeline
- **Trigger manually** whenever you wish.
- Or **schedule via cron jobs** for periodic execution.

---

## Cypress Execution Flow

1️⃣ Checkout the repository from **GitHub**.
2️⃣ Install project dependencies.
3️⃣ Install and verify **Cypress binary**.
4️⃣ Run **Cypress tests** with credentials as environment variables.
5️⃣ Capture **screenshots and videos** on test failure.
6️⃣ Archive Cypress artifacts for debugging.

---

## Output and Reporting

- ✅ Screenshots and videos captured on test failures.
- ✅ Test results archived and accessible via **Jenkins**.

---

## Future Scope

- Better **error handling**.
- Further enhancements on the **scripts**.
- Resolving **Cypress cache issue**, which is taking more time to install.
- **Cloud-based run** (e.g., GitHub or AWS).
- **Email notification** integration.

---

## Conclusion

With this **CI/CD pipeline**, you can ensure **seamless Naukri profile updates** and **automated tests running efficiently. ✅**

---

## Author
Developed by **Kiran Mahanthesh** ❤️