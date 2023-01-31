const router = require("express").Router();
const notesRoutes = require("./note.js");

router.use(notesRoutes);

module.exports = router;
