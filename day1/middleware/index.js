const express = require("express");

const app = express();
const port = 3000;

//loading middleware into the app
app.use(express.json());


//middleware - loggging auth validation


// ctreation of a middleware
const loggingMiddleware = function (req, res, next){
    console.log('LOGGING SUCCESS FULL')
    next();
}
app.use(loggingMiddleware);

// loading middleware in application

const authMiddleware = function ( req, res , next){
    console.log('auth is susessfull')
    next();
}
app.use(authMiddleware);

const validationMiddleware = function ( req, res, next){
    console.log('enter correct detail')
    next();

}
app.use(validationMiddleware);

const route = require("../routes/route");
//mounting the routes
app.use('/api', route)

// - > /api/student
// - > /api/admin

app.get("/", (req, res) => {
    console.log('it is route handler')
    console.log(req.body);
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});