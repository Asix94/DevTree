import { Router } from 'express';
import User from './models/User';

const router = Router();

/** Autenticacion y registro */
router.post('/auth/register', async (req, res) => {
    const user = new User(req.body); 

    await user.save();

    res.send('Registro creado correctamnete');
});

export default router;