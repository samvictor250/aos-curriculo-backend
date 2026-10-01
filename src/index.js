import express from 'express';
import userRoutes from './routes/userRoutes.js';
import sequelize from './configs/database.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', userRoutes);

try {
    await sequelize.authenticate();
    console.log('Conexão com o NeonDB estabelecida com sucesso!');
    
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
} catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
}