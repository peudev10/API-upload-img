const app = require('./app');

const connection = require('./models/connection')

require('dotenv').config();

const PORT = process.env.PORT || 3111;

const conexao = connection.getConnection();

if (conexao) {
    console.log('Conexão com o banco de dados estabelecida');
    app.listen(PORT, () => console.log(`Servidor rodando na porta http://localhost:${PORT}`));
}
else {
    console.log('não foi possível se conectar com o banco')
}
