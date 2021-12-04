import mysql from 'mysql'
const pool = mysql.createPool({
  host: 'rds-lmy007.ciaqbgfmuxpo.us-east-2.rds.amazonaws.com',
  port: 3306,
  database: 'lmy007',
  user: 'lmy007',
  password: 'm3210240'
})

export function sqlConnection(sql, sqlArr) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) reject(err)
      conn.query(sql, sqlArr, (err, res) => {
        if (err) reject(err)
        resolve(res)
        conn.release()
      })
    })
  })
}




// function sqlConnetion() {
//   const pool = mysql.createPool({
//     host: 'rds-lmy007.ciaqbgfmuxpo.us-east-2.rds.amazonaws.com',
//     port: 3306,
//     database: 'lmy007',
//     user: 'lmy007',
//     password: 'm3210240'
//   })
//   pool.getConnection(function (err, connetion) {
//     if (err) throw err
//     const sql = 'SELECT * FROM shopcart'
//     const sqlArr = []
//     connetion.query(sql, sqlArr, (err, data) => {
//       if (err) throw err
//       console.log(data)
//     })
//     connetion.release()
//   })
// }
// sqlConnetion()