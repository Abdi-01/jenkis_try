const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('<h2>Try Jenkins CI/CD with node pm2</h2>')
})

app.listen(3030, () => console.log('Running API', 3030));