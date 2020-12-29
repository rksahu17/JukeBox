const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const musicianInAlbumSchema = new Schema(
  {
    albumId: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    musicianType: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const MusicianInAlbum = moongoose.model(
  "MusicianInAlbum",
  musicianInAlbumSchema
);
module.exports = MusicianInAlbum;
