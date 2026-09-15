import { Router } from 'express';
import { createAcount } from './handlers';

const router = Router();

/** Autenticacion y registro */
router.post('/auth/register', createAcount);

export default router;