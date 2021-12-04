import express from 'express'
import router from './router/index.js'
const app = express()
app.use(express.static('public'))
app.use('/api', router)
app.listen(4000, () => {
  console.log('api server is running...')
})
