const { Router } = require("express");
const router = Router();
const {
  createSocial,
  updateSocial,
  deleteSocial,
  getSocial,
} = require("../controllers/socialController");

router.route("/media").get(getSocial).post(createSocial);
router.route("/media/:id").get().patch(updateSocial).delete(deleteSocial);

module.exports = router;
