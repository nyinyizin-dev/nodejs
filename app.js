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
    title: "Home Page",
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404 Not Found" });
});

app.listen(3000, () => {
  console.log("Server is running http://localhost:3000/");
});
