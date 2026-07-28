import {Router} from 'express';
import {getMenu} from '../controllers/menuController.js';

const router = Router();
router.get('/', getMenu); // GET http://localhost:3000/api/menu

export default router;