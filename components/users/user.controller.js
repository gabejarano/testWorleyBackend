const bcrypt = require('bcrypt');
const User = require('./user.model');
const jwt = require('jsonwebtoken');
const config = require('config');



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


exports.signup = async function (req, res) {
    try {
        const { email, password, repeat_password } = req.body;
        if (password != repeat_password) {
            return res.status(400).send({ data: 'Las contraseñas no coinciden, por favor valida nuevamente' })
        }
        let findUser = await User.findOne({ where: { email } });
        if (findUser) {
            return res.status(400).send({ data: 'Ya existe un usuario con el correo' })
        }
        //Crea hash para password
        const hashedPassword = await new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, function (err, hash) {
                if (err) reject(err)
                resolve(hash)
            });
        })
        await User.create({
            email,
            passwordSalt: hashedPassword,
        });
        res.send({ data: 'Se ha registrado satisfactoriamente' })
    } catch (e) {
        res.status(500).send({ data: e.message.includes('Twilio') ? e.message : "Algo salió mal creando el usuario, inténtalo de nuevo." })
    }
}