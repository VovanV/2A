import express from 'express';
const __DEV__ = true;
const app = express();


app.get('/task2A', (req, res) => {
    try {
        const inputA = ((req.query.a) ? req.query.a : 0);
        const inputB = ((req.query.b) ? req.query.b : 0);
        const a = (((+inputA) && typeof (+inputA) === 'number')? (+inputA):0);
        const b = (((+inputB) && typeof (+inputB) === 'number')? (+inputB):0);
        const result = a + b;
        res.send('Вывод: '+String(result));
    }
    catch(e){

    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
})
