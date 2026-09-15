import User from "../models/User";

export const createAcount = async (req, res) => {
    const user = new User(req.body); 

    await user.save();

    res.send('Registro creado correctamnete');
}