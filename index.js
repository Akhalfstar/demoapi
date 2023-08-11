const express = require('express');
const app = express();
const port = 3000; // You can change this port if needed

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});


app.get('/aman', (req, res) => {
    res.send('Achha Bachha');
});

app.get('/manish', (req, res) => {
    res.send('madarshod manish');
});

app.get('/Vaibhav', (req, res) => {
    res.send('Tharki hu mai sale');
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
