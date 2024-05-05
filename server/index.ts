import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import bookRoute from "./routes/books";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/books", bookRoute);

app.get("/", (req, res) => {
  res.json("hello server");
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
