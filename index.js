const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');


app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')






require('./controllers/home.js')(app);


app.listen(port, () => {
    console.log('Reddit listening on port localhost:3000!');
});

module.exports = app;