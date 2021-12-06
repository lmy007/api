import express from 'express'
import { getGoods } from '../controllers/shopcart_ctrl.js'
import {getNews} from "../controllers/news_ctrl.js"
const router = new express.Router()
router.get('/shopcart', getGoods)
router.get("/news",getNews)
export default router
