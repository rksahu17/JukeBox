const express = require("express");
const cors = require("cors");
const moongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
moongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = moongoose.connection;
connection.once("open", () => {
  console.log("MOngoDB database connection established");
});

const musiciansRouter = require("./routes/musicians");
const musicAlbumRouter = require("./routes/musicalbums");
const musicianInAlbumRouter = require("./routes/musicianinalbum");
app.use("/musicians", musiciansRouter);
app.use("/musicalbums", musicAlbumRouter);
app.use("/musicianinalbum", musicianInAlbumRouter);

app.listen(port, () => {
  console.log(`Server is running on post: + ${port}`);
});
