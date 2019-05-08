import { Router } from 'express';
import customers from './customers/customer.route';

const router: Router = Router();

router.use('/customers', customers);

export default router;
