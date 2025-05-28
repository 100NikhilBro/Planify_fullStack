const express = require('express');
const app = express();

const path = require('path');

app.use(express.json())

require('dotenv').config();

const PORT = process.env.PORT || 4567;

const cors = require('cors');
app.use(cors({
    origin: ["https://fanciful-basbousa-7c8cca.netlify.app", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}))

// const _dirname = path.resolve();


const morgan = require('morgan');
app.use(morgan('dev'));

const cookieParser = require('cookie-parser');
app.use(cookieParser());



const taskRoutes = require("./routes/taskRoutes");
// console.log("taskRoutes: ", taskRoutes);
app.use("/task", taskRoutes);


const userRoutes = require("./routes/userRoutes");
// console.log("userRoutes: ", userRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
    res.send({
        activeStatus: true,
        error: false,
    })
})

// console.log("Routes mount path for tasks:", "/task");
// console.log("Routes mount path for users:", "/user");


// app.use(express.static(path.join(_dirname, "/frontend/dist")));
// app.get("*", (_, res) => {
//     res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
// })



const connect = require("./config/db");
connect();


app.listen(PORT, () => {
    console.log(`Server started at PORT number ${PORT}`);
})