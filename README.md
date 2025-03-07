<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Naukri Profile Automation 🚀</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            padding: 20px;
        }
        .container {
            max-width: 900px;
            margin: auto;
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2, h3 {
            color: #007bff;
            text-align: center;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            margin: 10px 0;
            font-size: 16px;
            color: white;
            background: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            transition: background 0.3s;
        }
        .btn:hover {
            background: #0056b3;
        }
        .code-block {
            background: #272822;
            color: #f8f8f2;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }
        pre {
            margin: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Naukri Profile Automation 🤖</h1>
        <h2>🌟 Overview</h2>
        <p>This project automates the process of updating the resume on <strong>Naukri.com</strong> using <strong>Cypress</strong> and <strong>Cucumber BDD Framework</strong>. It includes scheduling a <strong>daily run</strong> via <strong>GitHub Actions</strong> to ensure your profile stays <strong>fresh and active</strong>. 💼✨</p>
        
        <h2>🔥 Features</h2>
        <ul>
            <li>✅ <strong>Automated Login</strong> using Cypress 🏆</li>
            <li>✅ Navigates to the <strong>Profile Section</strong> 🔍</li>
            <li>✅ Uploads a fresh <strong>resume file</strong> 📂</li>
            <li>✅ <strong>Verifies successful upload</strong> via confirmation message ✅</li>
            <li>✅ <strong>Runs daily at 5:30 AM IST</strong> ⏰ using GitHub Actions</li>
            <li>✅ <strong>Retry Mechanism:</strong> Auto-retries in <strong>15 mins</strong> if failed 🔄</li>
        </ul>

        <h2>📌 Prerequisites</h2>
        <ul>
            <li>⚡ Node.js <strong>v22.12.0</strong></li>
            <li>🏗️ Cypress installed (`npm install cypress`)</li>
            <li>🔐 GitHub repository access</li>
            <li>📝 Naukri.com account with valid credentials</li>
        </ul>

        <h2>🚀 Installation</h2>
        <div class="code-block">
            <pre>
1️⃣ Clone the repository:
git clone https://github.com/KiranMahanthesh/NaukriProfileAutomation.git
cd NaukriProfileAutomation

2️⃣ Install dependencies:
npm install

3️⃣ Set up credentials securely using GitHub Secrets:
- `NAUKRI_EMAIL`: Your Naukri login email 📧
- `NAUKRI_PASSWORD`: Your Naukri password 🔑
            </pre>
        </div>
        
        <h2>🏃 Running Tests Locally</h2>
        <div class="code-block">
            <pre>
npx cypress run
# Or open Cypress GUI
npx cypress open
            </pre>
        </div>

        <h2>🛠️ GitHub Actions - CI/CD Setup</h2>
        <ul>
            <li>✅ Runs the script <strong>daily at 5:30 AM IST</strong> ⏰</li>
            <li>✅ <strong>Retries execution once after 15 minutes</strong> if the first attempt fails 🔄</li>
        </ul>
        
        <h2>🚀 Triggering a Manual Run</h2>
        <ol>
            <li>Go to <strong>Actions</strong> tab in the GitHub repository 📂</li>
            <li>Select the latest <strong>Cypress Test Run</strong> 🎯</li>
            <li>Click <strong>Run workflow</strong> ▶️</li>
        </ol>

        <h2>🏗️ Cypress Test Flow</h2>
        <ol>
            <li>🔑 <strong>Login</strong> to Naukri with credentials</li>
            <li>📂 Navigate to the <strong>Profile Section</strong></li>
            <li>🔄 Click on <strong>Update Resume</strong></li>
            <li>📎 Upload the <strong>resume file</strong> (`Kiran_Resume_QA.pdf`)</li>
            <li>✅ Validate <strong>success message</strong> (`Resume has been successfully uploaded.`)</li>
            <li>⏹️ <strong>Stop execution</strong> using `Cypress.runner.stop()`</li>
        </ol>

        <h2>⚠️ Troubleshooting</h2>
        <div class="code-block">
            <pre>
🔴 Git error: 'fatal: refusing to merge unrelated histories'
git pull origin main --allow-unrelated-histories

🔴 Switch branch to `main` of correct repository
git remote set-url origin https://github.com/KiranMahanthesh/NaukriProfileAutomation.git
git checkout main
            </pre>
        </div>
        
        <h2>🤝 Contribution</h2>
        <p>💡 Fork the repository and submit <strong>pull requests</strong> for enhancements & fixes! 🚀</p>
        
        <h2>📜 License</h2>
        <p>This project is licensed under the <strong>MIT License</strong> 📄</p>
        
        <h2>👨‍💻 Author</h2>
        <p>Developed with ❤️ by <strong>Kiran Mahanthesh</strong> 🚀</p>
    </div>
</body>
</html>

