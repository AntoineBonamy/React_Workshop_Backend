const datasource = require("../datasource");

const getAllCharacters = (req, res) => {
  datasource
    .query("SELECT * FROM rickcharacter")
    .then(([character]) => res.json(character))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getCharacterById = (req, res) => {
  const id = parseInt(req.params.id);
  datasource
    .query("SELECT * FROM rickcharacter WHERE id = ?", [id])
    .then(([character]) => {
      res.json(character);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const createCharacter = (req, res) => {
  const { nom, species } = req.body;
  datasource
    .query("INSERT INTO rickcharacter (nom, species) VALUES (?,?)", [
      nom,
      species,
    ])
    .then(([result]) => {
      res.location(`/api/character/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Post request failed");
    });
};

const updateCharacter = (req, res) => {
    const id = parseInt(req.params.id);
    const { nom, species } = req.body;
    datasource
        .query("UPDATE rickcharacter SET nom = ?, species = ? WHERE id = ?", [nom, species, id])
        .then(([result]) => {
            if (result.affectedRows === 0) {
                res.status(404).send("Not Found")
            } else {
                res.sendStatus(204);
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error updating the character")
        })
}

const deleteCharacter = (req, res) => {
    const id = parseInt(req.params.id);
    datasource
        .query("DELETE FROM rickcharacter WHERE id = ?", [id])
        .then(([result]) => {
            if (result.affectedRows === 0) {
                res.status(404).send("Not Found")
            } else {
                res.sendStatus(204)
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error deleting this character")
        })
}

module.exports = {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter
};
