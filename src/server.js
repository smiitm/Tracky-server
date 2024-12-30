import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(express.json()); 


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
