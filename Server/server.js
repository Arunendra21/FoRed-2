const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Foreds",
  password: "andy", 
  port: 5432,
});

// Route: POST /login
app.post("/login", async (req, res) => {
  const { email, password, organizationName, type } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO users (type, email, password, organization_name)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [type, email, password, organizationName || null]
    );

    res.status(200).json({ message: "User login saved", user: result.rows[0] });
  } catch (error) {
    console.error("Error saving login:", error.message);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
