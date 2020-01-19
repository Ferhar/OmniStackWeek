const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://ferhar:ferhar@cluster0-f7a73.mongodb.net/teste?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//app.use(cors({ origin: 'http://localhost:3000'})); // libera acesso externo para toda a aplicação 
app.use(cors());
app.use(express.json());
app.use(routes);



server.listen(3333);