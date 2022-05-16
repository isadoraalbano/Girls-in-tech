import express from "express";

import MerchantsController from "../controllers/MerchantsController.js";

const router = express.Router();
/**
 * Aqui nós temos o uso do padrão camelCase, o que está bom.
 * Mas sugiro o uso do quebec-case para as rotas, pois nós devemos sempre lembrar que uma página de um site, sempre ou na maioria das vezes rsrs são em letra minúscula.
 * então vamos adotar algo como: .put('/merchant/status/:id)
 *
 * Além disso as rotas de merchants não devem ser alterada, ou seja, seu recurso primário é a loja, ou seja, merchants e depois você tem os recursos dessa rota como atualização de status, ou seja, merchants/status/:id
 */
router
  .get("/merchants", MerchantsController.findAll)
  .get("/merchants/:id", MerchantsController.findById)
  .post("/merchants", MerchantsController.createMerchant)
  .put("/merchants/:id", MerchantsController.updateMerchant)
  .put("/merchants/status/:id", MerchantsController.updateStatus)
  .put("/merchants/message/:id", MerchantsController.sendMessage)
  .delete("/merchants/:id", MerchantsController.deleteMerchant);

export default router;
