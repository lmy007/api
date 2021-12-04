import express from 'express'
import { getGoods } from '../controllers/shopcart_ctrl.js'
const router = new express.Router()
router.get('/shopcart', getGoods)
export default router
