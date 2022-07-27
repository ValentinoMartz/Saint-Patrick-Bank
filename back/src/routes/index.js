const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const homebanking = require("./homebanking");

router.use("/homebanking", homebanking);

module.exports = router;
