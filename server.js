const express = require("express");
const cors = require("cors");
const path = require("path");
const hoteis = require("./hoteis.json");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/bemVindo", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "bemVindo.html"));
});

app.get("/listaHoteis", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "listaHoteis.html"));
});

app.get("/hotel", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "hotel.html"));
});

app.get("/hotel/:id", (req, res) => {
  const hotel = hoteis.find((hotel) => hotel.id === req.params.id);
  if (hotel) {
    res.json(hotel);
  } else {
    res.status(404).send("Hotel não encontrado");
  }
});

app.get("/hoteis", (req, res) => {
  res.json(hoteis);
});

app.listen(PORT, () => {
  console.log(`Servidor em execução em http://localhost:${PORT}`);
});
