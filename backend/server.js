const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error : ${err.message}`);
    console.log(`Shutting Down the server due to uncaught Exception`);
    process.exit(1);
});

// config
dotenv.config({ path: "backend/config/config.env" });

// connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});

// Uncaught Error
// console.log(youtube)

// Unhadled Promise Rejection
process.on("unhandledRejection", (error) => {
    console.log(`Error: ${error.message}`);
    console.log(`Shutting Down the server due to unhandled promise Rejection`);
    server.close(() => {
        process.exit(1);
    });
});
