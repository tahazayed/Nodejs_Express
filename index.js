const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<form action="/product" method="post"><input name="title"><button type="submit">Submit</button></form>');
});
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/?title='+req.body.title);
});

app.get('/', (req, res) => {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
});