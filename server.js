require("dotenv").config();
const path = require("path");
const methodOverride = require("method-override");
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(cors());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);
app.use(errorHandler);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});

/**
 * Este último código se utilza para cerrar la conexión a la base de datos en
 * el momento en que se "apaga" el servidor de Express, es decir, cuando se
 * hace CTRL+C para "matar" al proceso.
 */
process.on("SIGINT", function () {
  const { mongoose } = require("./db");
  mongoose.connection.close(function () {
    console.log("Mongoose default connection is disconnected due to application termination.\n");
    process.exit(0);
  });
});
