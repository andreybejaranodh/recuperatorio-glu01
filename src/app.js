const express = require('express');
const path = require('path');
const cors = require('cors');

const mainRouter = require('./routers/main');
const userApiRoutes = require('./routers/api/user');
const productApiRoutes = require('./routers/api/product');
const roleRoutes = require('./routers/api/role');


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static('public'));

app.use('/', mainRouter);
app.use('/api/user', userApiRoutes);
app.use('/api/product', productApiRoutes);
app.use('/api/role', roleRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servido iniciado en el puerto: ' + port);
});
