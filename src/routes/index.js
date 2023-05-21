const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Hello world'));

router.post('/crear-usuario', async (req, res) => {
    // const {firstname, lastname, email, phone, document_type, document_number, birth_date, password} = req.body;
    // const newUser = new User({firstname, lastname, email, phone, document_type, document_number, birth_date, password});
    const {firstname, lastname, email, phone, client_type, birth_date, password} = req.body;
    const newUser = new User({firstname, lastname, email, phone, client_type, birth_date, password});
    await newUser.save();
    
    const token = jwt.sign({_id: newUser._id}, 'secretkey');

    res.status(200).json({token});
});

router.post('/iniciar-sesion', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    const rol = user.rol;
    
    if(!user) return res.status(401).send("The email doesn't exists");
    if(user.password !== password) return res.status(401).send("Wrong Password");

    const token = jwt.sign({_id: user._id}, 'secretkey');
    return res.status(200).json({token,rol});
});

router.get('/tasks', (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Task One',
            description: 'lorem ipsum',
            date: '2023-04-17T16:38:58.230+00:00'
        },
        {
            _id: 2,
            name: 'Task Two',
            description: 'lorem ipsum',
            date: '2023-04-17T16:38:58.230+00:00'
        },
        {
            _id: 3,
            name: 'Task Three',
            description: 'lorem ipsum',
            date: '2023-04-17T16:38:58.230+00:00'
        }
    ]);
});

router.get('/private-tasks', verifyToken, (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Task One',
            description: 'lorem ipsum',
            date: '2023-04-17T16:38:58.230+00:00'
        },
        {
            _id: 2,
            name: 'Task Two',
            description: 'lorem ipsum',
            date: '2023-04-17T16:38:58.230+00:00'
        },
        {
            _id: 3,
            name: 'Task Three',
            description: 'lorem ipsum',
            date: '2023-04-17T16:38:58.230+00:00'
        }
    ]);
});

module.exports = router;

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorize Request');
    }

    const token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send('Unauthorize Request');
    }

    const payload = jwt.verify(token, 'secretkey');
    req.userId = payload._id;
    next();
}