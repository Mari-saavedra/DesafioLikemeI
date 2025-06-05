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
    const { titulo, img, descripcion, likes } = req.body
    const newPublicacion = await creaPublicacionModel(titulo, img, descripcion, likes)
    res.json(newPublicacion)
  } catch (error) {
    res.json({ error: 'Error al procesar la solicitud' })
    console.error('Error =>', error)
  }
}
