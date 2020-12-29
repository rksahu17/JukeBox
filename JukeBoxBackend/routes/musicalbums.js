const router = require("express").Router();
let MusicAlbum = require("../models/MusicAlbum.model");

router.route("/").get((req, res) => {
  MusicAlbum.find()
    .sort("albumName")
    .then((musicalbums) => res.json(musicalbums))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/list/sortbydaterelease").get((req, res) => {
  MusicAlbum.find()
    .sort({ dateOfRelease: "asc" })
    .then((musicalbums) => res.json(musicalbums))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/list/sortbyprice").get((req, res) => {
  MusicAlbum.find()
    .sort({ price: "asc" })
    .then((musicalbums) => res.json(musicalbums))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/add").post((req, res) => {
  const albumName = req.body.albumName;
  const dateOfRelease = Date.parse(req.body.dateOfRelease);
  const genre = req.body.genre;
  const price = Number(req.body.price);
  const description = req.body.description;
  const musicAlbum = new MusicAlbum({
    albumName,
    dateOfRelease,
    genre,
    price,
    description,
  });

  musicAlbum
    .save()
    .then(() => res.json("Music Album added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  MusicAlbum.findById(req.params.id)
    .then((musicalbum) => res.json(musicalbum))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  MusicAlbum.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  MusicAlbum.findById(req.params.id)
    .then((musicalbum) => {
      musicalbum.albumName = req.body.albumName;
      musicalbum.dateOfRelease = Date.parse(req.body.dateOfRelease);
      musicalbum.genre = req.body.genre;
      musicalbum.price = Number(req.body.price);
      musicalbum.description = req.body.description;

      musicalbum
        .save()
        .then(() => res.json("Music Album updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
