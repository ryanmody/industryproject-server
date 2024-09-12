import express from "express";
import * as controller from '../controllers/controller.js'

const router = express.Router()

router
.route('/test1')
.get(controller.getWarehouses)

export default router;