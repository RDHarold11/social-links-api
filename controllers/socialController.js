const Social = require("../models/Social");

const getSocial = async (req, res) => {
  const result = await Social.find().exec();
  if (!result) return res.json({ msg: "Theres no data" });
  res.json(result);
};

const createSocial = async (req, res) => {
  if (!req.body.title || !req.body.linkImg || !req.body.link)
    return res.json({ msg: "no data" });

  try {
    const result = await Social.create({
      title: req.body.title,
      link: req.body.link,
      linkImg: req.body.linkImg,
    });

    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteSocial = async (req, res) => {
  if (!req.params.id) return res.status(204).json({ msg: "id is required" });

  const social = await Social.findOne({ _id: req.params.id }).exec();
  if (!social) return res.json({ msg: "Theres no data" });

  const result = await social.deleteOne();
  res.json(result);
};

const updateSocial = async (req, res) => {
  if (!req.params.id) return res.status(204).json({ msg: "id is required" });
  if (!req.body.title || !req.body.linkImg || !req.body.link)
    return res.json({ msg: "no data" });

  const social = await Social.findOne({ _id: req.params.id }).exec();

  if (!social) return res.json({ msg: "Theres no a social" });
  social.title = req.body.title;
  social.link = req.body.link;
  social.linkImg = req.body.linkImg;

  const result = await social.save();
  res.json(result);
};

module.exports = { createSocial, getSocial, deleteSocial, updateSocial };
