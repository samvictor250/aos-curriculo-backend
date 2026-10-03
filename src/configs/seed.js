import sequelize from './database.js';
import Profile from '../models/Profile.js';
import Experience from '../models/Experience.js';
import Project from '../models/Project.js';

export const seedDatabase = async () => {
    try {
        const count = await Profile.count();
        if (count > 0) {
            console.log('O banco já possui dados cadastrados.');
            return;
        }

        console.log('Populando o banco com os 2 currículos obrigatórios...');

        const profile1 = await Profile.create({
            fullName: 'Samuel Victor Hill Santos',
            headline: 'Estudante de Sistema para internet',
            summary: 'Desenvolvedor focado em arquitetura backend, REST APIs e sistemas.',
            email: 'samuel.hillsantos@gmail.com',
            github: 'https://github.com/samhillsantos',
            linkedin: 'https://www.linkedin.com/in/samuel-victor-697524273'
        });

        await Experience.create({
            company: 'Experiência Profissional / CLT',
            role: 'Desenvolvedor / Jovem Aprendiz',
            startDate: '2024',
            endDate: '2026',
            description: 'Atuação em processos e sistemas internos, evoluindo de suporte para desenvolvimento.',
            ProfileId: profile1.id
        });

        await Project.create({
            title: 'erp-estoque-cli',
            description: 'Projeto PoC para uma futura evolução Springboot',
            techStack: 'Java 21',
            url: 'https://github.com/samhillsantos/erp-estoque-cli',
            ProfileId: profile1.id
        });

        const profile2 = await Profile.create({
            fullName: 'Ana Beatriz Silva',
            headline: 'Engenheira de Software Júnior',
            summary: 'Apaixonada por código limpo, bancos de dados relacionais e open source.',
            email: 'ana.beatriz@email.com',
            github: 'https://github.com/anabeatriz',
            linkedin: 'https://linkedin.com/in/anabeatriz'
        });

        await Experience.create({
            company: 'Tech Solutions Inc.',
            role: 'Estagiária de Backend',
            startDate: '2025',
            endDate: '2026',
            description: 'Manutenção de APIs em Node.js e otimização de queries SQL.',
            ProfileId: profile2.id
        });

        await Project.create({
            title: 'Task Manager CLI',
            description: 'Gerenciador de tarefas de alta performance construído para terminal.',
            techStack: 'Rust, Ratatui',
            url: 'https://github.com/anabeatriz/task-cli',
            ProfileId: profile2.id
        });

        console.log('Banco populado com sucesso com 2 currículos!');
    } catch (error) {
        console.error('Erro ao popular o banco de dados:', error);
    }
};