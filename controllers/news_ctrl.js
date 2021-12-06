
import { sqlConnection } from '../db/mysql.js'
export async function getNews(req, res) {
  try {
    var sqlArr = []
    var sql = 'SELECT * from news limit ?,?'
    var page = 1
    var limit = 8
    if (req.query._page && req.query._limit) {
      if (req.query._page) {
        page = req.query._page
      }
      if (req.query._limit) {
        limit = parseInt(req.query._limit)
      }
    } else {
      sql = 'SELECT * from news'
    }
    sqlArr.push((page - 1) * 2)
    sqlArr.push(limit)
    const data = await sqlConnection(sql, sqlArr)
    res.setHeader('Access-Control-Allow-Origin', '*')
    var result = []
    for (var i = 0; i < data.length; i++) {
      var temp = {}
      temp.art_id = data[i].art_id
      temp.title = data[i].title
      temp.aut_id = data[i].aut_id
      temp.comm_count = data[i].comm_count
      temp.pubdate = data[i].pubdate
      temp.aut_name =data[i].aut_name
      if (data[i].images === null) {
        temp.cover = { type: 0 }
      } else {
        var images = data[i].images.split(',')
        temp.cover = { type: images.length, images: images }
      }
      result.push(temp)
    }
    res.send(result)
  } catch (e) {
    res.send({
      status: 401,
      message: '請求失敗',
      desc: e.message
    })
  }
}
