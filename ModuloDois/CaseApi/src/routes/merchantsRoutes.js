import express from 'express'

import MerchantsController from '../controllers/MerchantsController.js'

const router = express.Router();

router
    .get('/merchants', MerchantsController.findAll)
    .get('/merchants/:id', MerchantsController.findById)
    .post('/merchants', MerchantsController.createMerchant)
    .put('/merchants/:id', MerchantsController.updateMerchant)
    .put('/merchantStatus/:id', MerchantsController.updateStatus)
    .put('/merchantMessage/:id', MerchantsController.sendMessage)
    .delete('/merchant/:id', MerchantsController.deleteMerchant)


export default router;