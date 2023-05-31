const express = require("express");

const router = express.Router();

const controller = require("../controllers/rickAndMortyCharacter.controller");

  router.get("/", controller.getAllCharacters)
  router.get("/:id", controller.getCharacterById)
  router.post("/", controller.createCharacter)
  router.put("/:id", controller.updateCharacter)
  router.delete("/:id", controller.deleteCharacter)

module.exports = router;