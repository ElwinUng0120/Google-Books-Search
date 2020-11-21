const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("", bookRoutes);

module.exports = router;
