// Import express (js flask), like import module in Python
const express = require('express');
// Create express app
const app = express();

// Socket.io needs access to the HTTP server
const server = require('http').Server(app);
// Handlebars
const exphbs = require('express-handlebars');

// App use handlebars template
app.engine('handlebars', exphbs.engine());
// Look for handlebars file
app.set('view engine', 'handlebars');

// Render views / index.handlebars
app.get('/', (req, res) => {
    res.render('index');
});

// Start server
server.listen(3000, () => {
    console.log('Server listening on Port 3000');
});