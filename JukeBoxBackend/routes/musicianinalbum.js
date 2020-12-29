const router = require("express").Router();
let MusicianInAlbum = require("../models/MusiciansInAlbum.model");

router.route("/").get((req, res) => {
  MusicianInAlbum.find()
    .sort("name")
    .then((musicianinalbum) => res.json(musicianinalbum))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/list/sortbymusicianname").get((req, res) => {
  MusicianInAlbum.find()
    .sort({ name: "asc" })
    .then((musicianinalbum) => res.json(musicianinalbum))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const albumId = req.body.albumId;
  const name = req.body.name;
  const musicianType = req.body.musicianType;

  const musicianinalbum = new MusicianInAlbum({ albumId, name, musicianType });

  musicianinalbum
    .save()
    .then(() => res.json("Musician In Album added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  MusicianInAlbum.find({ albumId: req.params.id })
    .then((musicianinalbum) => res.json(musicianinalbum))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id/sortbymusicianname").get((req, res) => {
  MusicianInAlbum.find({ albumId: req.params.id })
    .sort("name")
    .then((musicianinalbum) => res.json(musicianinalbum))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  MusicianInAlbum.findByIdAndDelete(req.params.id)
    .then(() => res.json("Musician in album deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  MusicianInAlbum.findById(req.params.id)
    .then((musicianinalbum) => {
      musicianinalbum.albumId = req.body.albumId;
      musicianinalbum.name = req.body.name;
      musicianinalbum.musicianType = req.body.musicianType;

      musicianinalbum
        .save()
        .then(() => res.json("Musician in album updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
