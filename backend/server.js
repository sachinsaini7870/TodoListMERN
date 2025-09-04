// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()

// User defined packages
const Todoroutes = require('./routes/todo')

// configurations
const PORT = process.env.PORT || 4000;



// middlewares
app.use(cors());
app.use(express.json());

// middleware for show method or path in console
// app.use((req, res, next) => {
//     console.log(req.method, req.path)
//     next()
// })

// Routes (http://localhost:${PORT}/) 
app.get('/', (req, res) => {
    res.json({
        msg: `Welcome to our application`
    })
})


app.use('/api/todos', Todoroutes);

// Middleware Handle 404 page not found
app.use((req, res) => {
    res.status(404).json({ message: '404 Page not found' });
});




// Connection to db and start server
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todoapp').then(
    () => {
        app.listen(PORT, () => {
            console.log(`server is up and listening at: http://localhost:${PORT} & connected to our db`)
        })
    }
).catch((error) => {
    console.log(error);
})
