const express = require("express");
const connectToDB = require("./databse");
const app = express();
const cors = require('cors')
const PORT = 8000;
connectToDB();

app.use(cors({
  origin: "*"
}))

app.use(express.json());

// app.get("/", (req, res) => {
//   console.log(req.method);
//   res.send("Hello Users!");
// });

app.use('/api/v3.2/contact', require('./router/contact.router'))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
