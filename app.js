const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Group 3 Production Web App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #1e3c72, #2a5298);
            color: white;
            text-align: center;
            padding-top: 80px;
          }

          .container {
            background: rgba(0,0,0,0.3);
            display: inline-block;
            padding: 40px;
            border-radius: 12px;
          }

          h1 {
            font-size: 40px;
          }

          .status {
            margin-top: 20px;
            font-size: 22px;
            color: #00ff9d;
          }

          .info {
            margin-top: 15px;
            font-size: 18px;
          }
        </style>
      </head>

      <body>

        <div class="container">
          <h1> Group 3 Production Web App</h1>

          <div class="status">
            ✅ Application Running Successfully
          </div>

          <div class="info">
            🔒 HTTPS Enabled Successfully
          </div>

          <div class="info">
            🌐 Custom Domain Connected Successfully. Live Demo ongoing
          </div>

          <div class="info">
            Environment: ${process.env.NODE_ENV || "development"}
          </div>

          <div class="info">
            Server Time: ${new Date().toLocaleString()}
          </div>

          <div class="info">
            CI/CD Pipeline Status: Auto Deployment Working
          </div>

        </div>

      </body>
    </html>
  `);
});

// basic error handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});