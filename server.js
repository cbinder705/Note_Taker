const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const publicRoutes = require("./routes/publicRoutes");

// Parse URL encoded & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Host public folder
app.use(express.static("public"));

// Use apiRoutes
app.use("/api", apiRoutes);
app.use("/", publicRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
