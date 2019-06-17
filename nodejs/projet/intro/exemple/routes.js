const express = require('express');
const app = express();
const router = require('./routes');
const parser = require('body-parser')


router.get('/', (req, res) => {
    res.send({method: 'GET'})
})


router.post('/', (req, res) => {
    let test = req.body;
    res.send({method: 'POST', testRes: test});
});


router.put('/:id', (req, res) => {
    let p = {nom: 'Xavier', id: 103}
    res.send({method: 'PUT', result: p});
});


router.delete('/:id', (req, res) => { 
    let pid = req.params.id;
    let p = [
        {nom: 'Xavier', id: 103},
        {nom: 'Charles', id: 104},
        {nom: 'Henri', id: 105}
    ];
    let temp;
    for(let i = 0; i < p.length; i++){
        if(pid == p[i].id)
        temp = p[i];
        break;
    };

    res.send({method: 'DELETE', deleted: temp});
});


module.exports = router;