import express from "express";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import usuariosRutas from "./rutas/usuario.rutas.js";
import docenteRutas from "./rutas/docente.rutas.js";
import autorizadoRutas from "./rutas/autorizado.rutas.js";

import template from "../template";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use(usuariosRutas);
app.use(docenteRutas);
app.use(autorizadoRutas);

app.get("/", (req, res) => {
  res.status(200).send(template());
});

export default app;
