const Citaform = require('../models/Citaform');

function register (req,res){
    var data = req.body;

    var citaform = new Citaform();
    citaform.pregunta1 = data.pregunta1;
    citaform.pregunta2 = data.pregunta2;
    citaform.pregunta3 = data.pregunta3;
    citaform.pregunta4 = data.pregunta4;
    citaform.pregunta5 = data.pregunta5;
    citaform.pregunta6 = data.pregunta6;
    citaform.pregunta7 = data.pregunta7;
    citaform.pregunta8 = data.pregunta8;
    citaform.pregunta9 = data.pregunta9;
    citaform.pregunta10 = data.pregunta10;

    citaform.save((err, citaform_save) => {
        if(err){
            res.status(500).send({message:'Error en el servidor'});
        } else {
            if(citaform_save){
                res.status(202).send({producto: citaform_save})
            } else{
                res.status(403).send({message: 'No se registro el formulario'})
            }
        }
    });
}