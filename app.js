const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars')
const routes = require('./config/routes');

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'app/views/layouts'),
    partialsDir: path.join(__dirname, 'app/views/partials'),
});

app.engine('handlebars', hbs.engine);
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'handlebars');

app.use(express.urlencoded());
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

const port = 3000;
app.listen(port, () => console.log('listening on port ' + port));