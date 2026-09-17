import { Router } from 'express';
import { body } from 'express-validator';
import { createAcount, getUser, login } from './handlers';
import { handleInputErrors } from './middleware/validation';

const router = Router();

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
    body('password')
        .isLength({min: 8})
        .withMessage('El Password es muy corto minimo 8 caracteres'),
    handleInputErrors,
    createAcount
);

router.post('/auth/login', 
    body('email')
        .isEmail()
        .withMessage('E-mail no valido'),
    body('password')
        .notEmpty()
        .withMessage('El Password es obligatorio'),
    handleInputErrors,
    login 
);

router.get('/user', getUser);

export default router;