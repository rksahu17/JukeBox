const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const musicAlbumSchema = new Schema(
  {
    albumName: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },
    dateOfRelease: {
      type: Date,
      required: true,
    },
    genre: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      max: 100,
      min: 10,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const MusicAlbum = moongoose.model("MusicAlbum", musicAlbumSchema);
module.exports = MusicAlbum;
