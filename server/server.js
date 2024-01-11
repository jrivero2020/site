import { config } from "../config/config";
import app from "./express";

import { sequelize } from "./bdatos/bdatos.js";

import devBundle from "./devBundle"; //Quitar para produccion
devBundle.compile(app); //Quitar para produccion

try {
  await sequelize.authenticate();
  console.log("Conectado a Mysql");
} catch (error) {
  console.error("Error en SQL :", error);
}

app.listen(config.nodeport, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server Iniciado en puerto %s.", config.nodeport);
});
