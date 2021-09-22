import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
  {
    name: "Lamin Jobe",
    number: "00220-3843509",
    id: 6,
  },
  {
    name: "fatima",
    number: "3187878",
    id: 8,
  },
  {
    name: "lamin sise",
    number: "1454",
    id: 9,
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Hi Ebrima, this is another one");
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
