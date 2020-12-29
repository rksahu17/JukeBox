const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const musicianSchema = new Schema(
  {
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

const Musician = moongoose.model("Musician", musicianSchema);
module.exports = Musician;
