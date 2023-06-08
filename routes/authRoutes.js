const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
// const { expressjwt: checkJwt } = require("express-jwt");
require("dotenv").config();

/**
 * Se sugiere usar este archivo para crear rutas relativas al proceso de
 * autenticación. Ejemplos: "/login" y "/logout".
 */
router.post("/token", authController.token);

// router.get("/register", authController.register);
// router.post("/register", authController.createUser);

// router.get("/logout", authController.logout);

module.exports = router;
