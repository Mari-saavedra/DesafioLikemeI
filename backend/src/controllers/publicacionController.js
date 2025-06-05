import { leePublicacionModel, creaPublicacionModel } from '../models/publicacionModel.js'

export const leePublicacion = async (req, res) => {
  try {
    const publicaciones = await leePublicacionModel()
    res.json(publicaciones)
  } catch (error) {
    res.json({ error: 'Error al procesar la solicitud' })
  }
}

export const creaPublicacion = async (req, res) => {
  try {
    const { titulo, url, descripcion, likes } = req.body
    const newPublicacion = await creaPublicacionModel(titulo, url, descripcion, likes)
    res.json(newPublicacion)
  } catch (error) {
    res.json({ error: 'Error al procesar la solicitud de creacion' })
    console.error('Error al crear=>', error)
  }
}