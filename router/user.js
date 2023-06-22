const express = require("express");
const router = express.Router(); //instance object express untuk menjalankan router secara modular
const usercontroller = require("../controllers/user");

router.route("/api/user").post(usercontroller.login).get(usercontroller.login);
router.post("/api/user/daftar", usercontroller.register);

module.exports = router;
