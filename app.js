const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const fs = require("fs");

  //öfr hämta data
  const data = fs.readFileSync("people.txt", "utf8");
  //sätta in in var data i array
  const persons = data.split("\n");

  let html = "<ul>";

  html += "</ul>";

  for (const line of persons) {
    const person = line.split(",");
    const name = person[0];
    const age = person[1];
    html += `<li>
    ${name} is ${age} years
    </li>`;
    console.log({ person });
  }

  res.send(html);
});

app.listen(5500, () => {
  console.log("http://localhost:5500/");
});
