import { Router } from 'express';
import { body } from 'express-validator';
import { createAcount } from './handlers';

const router = Router();

/** Autenticacion y registro */
router.post('/auth/register', 
    body('handle').notEmpty(),
    createAcount);

export default router;