const CitaForm = require ('../models/FormCita');
function Register(req,res){
    const register = new CitaForm();
    const data = req.body;
    

    register.respuesta1 = data.respuesta1
    register.respuesta2 = data.respuesta2
    register.respuesta3 = data.respuesta3
    register.respuesta4 = data.respuesta4
    register.respuesta5 = data.respuesta5
    register.respuesta6 = data.respuesta6
    register.respuesta7 = data.respuesta7
    register.respuesta8 = data.respuesta8
    register.respuesta9 = data.respuesta9
    register.respuesta10 = data.respuesta10

    register.save((err, register_save)=>{
        if (err) {
            res.status(500).send({ message: 'Error en el servidor' });
        } else {
            if (register_save) {
                res.status(200).send({ FormCita: register_save });
            } else {
                res.status(403).send({ message: 'No se registro el Formulario de la Pre-Orden' });
            }
        }
    });

    module.exports = {
            Register
    }

}