import { Router } from 'express';
import { body } from 'express-validator';
import { createAcount } from './handlers';

const router = Router();

/** Autenticacion y registro */
router.post('/auth/register', 
    body('handle')
        .notEmpty()
        .withMessage('El Handle no puede ir vacio'),
    body('name')
        .notEmpty()
        .withMessage('El Nombre no puede ir vacio'),
    body('email')
        .isEmail()
        .withMessage('E-mail no valido'),
    body('name')
        .isLength({min: 8})
        .withMessage('El Password es muy corto minimo 8 caracteres'),
    createAcount);

export default router;