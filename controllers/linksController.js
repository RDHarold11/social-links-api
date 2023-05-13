const Links = require("../models/Links");

const getLinks = async (req, res) => {
  const result = await Links.find();
  if (!result) return res.status(204).json({ msg: "No data" });
  res.json(result);
};

const createLinks = async (req, res) => {
  if (!req.body.title || !req.body.img)
    return res.json({ msg: "data cant be empty" });

  try {
    const result = await Links.create({
      title: req.body.title,
      img: req.body.img,
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getLinks, createLinks };
