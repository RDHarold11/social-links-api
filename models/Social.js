const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const socialSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  linkImg: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Social", socialSchema);
