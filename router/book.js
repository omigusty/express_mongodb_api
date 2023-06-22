const express = require("express");
const router = express.Router();
const bookcontroller = require("../controllers/book");
const book = require("../controllers/book");

router.route("/api/book").get(bookcontroller.index).post(bookcontroller.tambah);

// update data
router.put("/api/book/:id", bookcontroller.update);
// delete data
router.delete("/api/book/:id", bookcontroller.delete);

module.exports = router; //eksport module router
