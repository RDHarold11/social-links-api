const { Router } = require("express");
const router = Router();
const { createLinks, getLinks } = require("../controllers/linksController");

router.route("/links").get(getLinks).post(createLinks);

module.exports = router;
