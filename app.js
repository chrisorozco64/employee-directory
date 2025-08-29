import express from "express";
const app = express();
export default app
import employees from "./db/employees.js";
console.log(employees)

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => { 
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
    const randomIndex = Math.floor(Math.random() * employees.length);
    res.status(200).send(employees[randomIndex]);
    });
    

app.route("/employees/:id").get((req, res) => {
    const { id } = req.params;
    if (id > employees.length) {
        return res.status(400).send("Employee not found");
    }
    res.status(200).send(employees[id - 1]); 
});

