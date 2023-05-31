const CitaForm = require ('../models/FormCita');

function Register(req,res){
    const data = req.body;
    const register = new CitaForm();

    register.pregunta1 = data.pregunta1
    register.pregunta2 = data.pregunta2
    register.pregunta3 = data.pregunta3
    register.pregunta4 = data.pregunta4
    register.pregunta5 = data.pregunta5
    register.pregunta6 = data.pregunta6
    register.pregunta7 = data.pregunta7
    register.pregunta8 = data.pregunta8
    register.pregunta9 = data.pregunta9
    register.pregunta10 = data.pregunta10

    register.save((err, register_save)=>{
        if (err) {
            res.status(500).send({ message: 'Error en el servidor' });
        } else {
            if (producto_save) {
                res.status(200).send({ producto: register_save });
            } else {
                res.status(403).send({ message: 'No se registro el Formulario de la Pre-Orden' });
            }
        }
    });

    module.exports = {
        Register
    }

}