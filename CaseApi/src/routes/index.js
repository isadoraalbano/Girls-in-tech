import express from "express";
import merchants from "./merchantsRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "API módulo 2"})
  })

  app.use(
    express.json(),
    merchants
  )
}

export default routes