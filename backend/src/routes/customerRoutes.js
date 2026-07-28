import {Router} from 'express';
import {registerCustomer, getCustomers} from '../controllers/customerController.js';

const router = Router();

router.post('/register', registerCustomer); // POST http://localhost:3000/api/customers
router.get('/', getCustomers);  // GET http://localhost:3000/api/customers

export default router;