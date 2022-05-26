const { Router } = require("express");
const { route } = require("express/lib/router");
const router = Router();
const data = require("../data/index.json");

router.get("/api/dogs/all", (req, res) => {
  res.json(data);
});

router.get("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const resulst = data.find((item) => item.id === Number(id));
  res.json(resulst);
});

router.post("/api/search", (req, res) => {
  const { value } = req.body;
  if (!value || value.trim() === "") {
    return res.json({ error: "You must pass a value" });
  }

  const results = data.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );
  res.json(results);
});

module.exports = router;
