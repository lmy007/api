import { sqlConnection } from '../db/mysql.js'
export async function getGoods(req, res) {
  try {
    const sql = 'SELECT * FROM shopcart'
    const sqlArr = []
    const data = await sqlConnection(sql, sqlArr)
    res.send({
      status: 200,
      message: '獲取列表成功',
      list: data
    })
  } catch (e) {
    res.send({
      status: 1,
      message: '請求失敗',
      desc: e.message
    })
  }
}
