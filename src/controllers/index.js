const categorias = [
  "Tech",
  "Matemática",
  "Ciência",
  "Robotica",
  "Esporte",
  "Marcas",
  "Ofertas",
];

function indexPage(req, res) {
  res.render("index", { categorias });
}

module.exports = { indexPage };
