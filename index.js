const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.status(200).send('<h2>Try Jenkins CI/CD with node pm2</h2>')
})

app.listen(PORT, () => console.log('Running API', PORT));