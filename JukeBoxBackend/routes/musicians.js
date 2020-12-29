const router = require("express").Router();
let Musician = require("../models/Musician.model");

router.route("/").get((req, res) => {
  Musician.find()
    .sort("name")
    .then((musicians) => res.json(musicians))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const musicianType = req.body.musicianType;

  const musician = new Musician({ name, musicianType });

  musician
    .save()
    .then(() => res.json("Musician added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Musician.findById(req.params.id)
    .then((musician) => res.json(musician))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Musician.findByIdAndDelete(req.params.id)
    .then(() => res.json("Musician deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Musician.findById(req.params.id)
    .then((musician) => {
      musician.name = req.body.name;
      musician.musicianType = req.body.musicianType;

      musician
        .save()
        .then(() => res.json("Musician updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
