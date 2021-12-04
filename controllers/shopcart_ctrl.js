import { sqlConnection } from '../db/mysql.js'
export async function getGoods(req, res) {
  try {
    const sql = 'SELECT * FROM shopcart'
    const sqlArr = []
    const data = await sqlConnection(sql, sqlArr)
    res.send({
      status: 200,
      messeage: '獲取列表成功',
      data: data
    })
  } catch (e) {
    res.send({
      status: 1,
      message: '請求失敗',
      desc: e.message
    })
  }
}

