import express from 'express';
import dotenv from 'dotenv';
import sequelize from './configs/database.js';

import './models/Profile.js';
import './models/Experience.js';
import './models/Project.js';

import { seedDatabase } from './configs/seed.js';

import curriculumRoutes from './routes/curriculumRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', curriculumRoutes);
app.use('/api', experienceRoutes);
app.use('/api', projectRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'API do Currículo Express rodando com sucesso!' });
});

try {
    await sequelize.authenticate();
    console.log('Conexão com o NeonDB estabelecida com sucesso!');
    
    await sequelize.sync();
    console.log('Tabelas sincronizadas com sucesso!');
    
    await seedDatabase();
    
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
} catch (error) {
    console.error('Erro ao conectar ou sincronizar com o banco de dados:', error);
}