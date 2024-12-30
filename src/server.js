import express from "express";
import cors from "cors";
import sessionRoutes from "./routes/sessionRoutes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(express.json()); 


app.use("/api/sessions", sessionRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
