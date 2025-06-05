import pool from '../../db/config.js'

export const leePublicacionModel = async () => {
  const sqlQuery = 'SELECT * FROM posts'
  const response = await pool.query(sqlQuery)
  console.log(response.rows)
  return response.rows
}

export const creaPublicacionModel = async (titulo, url, descripcion, likes) => {
  const sqlQuery = {
    text: 'INSERT INTO posts (titulo, img, descripcion, likes) values ($1, $2, $3, $4) RETURNING *',
    values: [titulo, url, descripcion, likes]
  }
  const result = await pool.query(sqlQuery)
  console.log('Post agregado', result)
  return result.rows
}