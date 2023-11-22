const bcrypt = require('bcrypt');
const User = require('./user.model')
exports.login = async function (req, res) {
    try {
        const { email, password } = req.body;
        let usuario = await User.findOne(
            {
                where: { email },
            });
        if (usuario == null) {
            return res.status(401).send({ data: "El usuario no existe" })
        }
        bcrypt.compare(password, usuario.passwordSalt, async function (err, result) {
            if (!result) {
                return res.status(401).send({ data: "Contraseña o usuario incorrecta" })
            }
            const token = jwt.sign({
                _id: usuario.id, _email: usuario.email
            }, config.get('auth.SECRET_KEY'), { expiresIn: '8h' });
            return res.status(200).json({
                token,
            })
        });
    } catch (e) {
        console.log(e)
        res.status(500).send({ data: "Algo salió mal, intentalo de nuevo. Si el error persiste por favor cominicate con tu proveedor de servicio" })
    }
}