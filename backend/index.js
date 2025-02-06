import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.ALLOWED_HOSTS,
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello, yash!" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
