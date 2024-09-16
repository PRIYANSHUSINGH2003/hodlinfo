const express = require('express');
const mysql = require('mysql2/promise');
const axios = require('axios');

const app = express();
const port = 3000;

// MySQL connection setup
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'hodlinfo',
    password: '110044',
    port: 3306,
});

// Fetch data from WazirX API and store in MySQL
const fetchData = async () => {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const tickers = Object.values(response.data).slice(0, 10);

        const connection = await pool.getConnection();

        for (const ticker of tickers) {
            const { name, last, buy, sell, volume, base_unit,open, low, high, at} = ticker;
            await connection.query(
                'INSERT INTO tickers (name, last, buy, sell, volume, base_unit,Open_data, low, high, at7) VALUES (?,?,?,?,?, ?, ?, ?, ?, ?)',
                [name, last, buy, sell, volume, base_unit,open, low, high, at]
            );
        }

        connection.release();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Create a route to get data from MySQL
app.get('/api/tickers', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM tickers');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data from database:', error);
        res.status(500).send('Server Error');
    }
});

// Fetch data when server starts
fetchData();

app.use(express.static('public')); // Serve static files from 'public' directory

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
