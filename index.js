const express = require("express");
const path = require("path")
const usersRouters = require("./routers/users")
const app = express();
const SERVER_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
    console.log("Express http server listening on: " + SERVER_PORT);
}

//app.use("/test",express.static("./views"))
app.use(express.static("./views"))
app.use(express.static("./views/html"))
//app.use(usersRouters)
app.use("/users", usersRouters)

//Application middleware
app.use((req, res, next) => {
    console.log("Middleware - 1: " + req.url)
    next()
})

app.use("/college", (req, res, next) => {
    console.log("College Middleware: " + req.url)
    next()
})

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/student", (req, res) => {
    res.send("Student");
});

app.get("/college/name", (req, res) => {
    res.send("Seneca College");
});

// setup another route to listen on /about
//app.get("/home.html", function(req,res){
//    res.sendFile(path.join(__dirname,"/views/home.html"));
//});

app.listen(SERVER_PORT, onHttpStart);

//http://localhost:8080/users/faculty
//http://localhost:8080/users/fulltimefaculty
//http://localhost:8080/users/fulltime/student