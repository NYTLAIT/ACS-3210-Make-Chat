// Import express (js flask), like import module in Python
const express = require('express');
// Create Express App
const app = express();
// Socket.io needs access to the HTTP server
const server = require('http').Server(app);

// Socketio
const io = require('socket.io')(server);
io.on("connection", (socket) => {
    console.log("🔌 New user connected! 🔌");
})

// Reister Handlebars
const exphbs = require('express-handlebars');
// App use handlebars template
app.engine('handlebars', exphbs.engine());
// Look for handlebars file
app.set('view engine', 'handlebars');
// Establish public folder for browser to access
app.use('/public', express.static('public'))

// Render views / index.handlebars
// Create Route '/'
app.get('/', (req, res) => {
    res.render('index');
});

// Start server
server.listen(3000, () => {
    console.log('Server listening on Port 3000');
});