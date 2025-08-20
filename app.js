const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  let blogs = [
    { title: "Blog 1", content: "This is the first blog post." },
    { title: "Blog 2", content: "This is the second blog post." },
    { title: "Blog 3", content: "This is the third blog post." },
  ];

  res.render("home", {
    blogs,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(3000, () => {
  console.log("Server is running http://localhost:3000/");
});
