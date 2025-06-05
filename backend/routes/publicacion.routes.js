import { Router } from 'express'

import { leePublicacion, creaPublicacion } from '../src/controllers/publicacionController.js'

const router = Router()

router.get('/posts', leePublicacion)
router.post('/posts', creaPublicacion)

export default router
