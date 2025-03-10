const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.use(express.json()); // Middleware to parse JSON bodies

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

const items = ['Apple', 'Banana', 'Orange'];

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const newItem = req.body.item;
    items.push(newItem);
    res.json(items);
});