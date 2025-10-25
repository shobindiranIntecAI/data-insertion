import express from "express";

export const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is alive 🚀" });
});
