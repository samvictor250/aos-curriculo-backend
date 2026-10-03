import Profile from '../models/Profile.js';
import Experience from '../models/Experience.js';
import Project from '../models/Project.js';

export const getAllProfiles = async (req, res) => {
    try {
        const profiles = await Profile.findAll({
            include: [Experience, Project]
        });

        if (profiles.length === 0) {
            return res.status(404).json({
                message: "Nenhum currículo encontrado no sistema."
            });
        }

        return res.status(200).json({
            message: "Currículos encontrados com sucesso!",
            data: profiles
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erro interno no servidor.",
            error: error.message
        });
    }
};

export const createProfile = async (req, res) => {
    try {
        const { fullName, headline, summary, email, github, linkedin } = req.body;

        const newProfile = await Profile.create({
            fullName,
            headline,
            summary,
            email,
            github,
            linkedin
        });

        return res.status(201).json({
            message: "Perfil criado com sucesso!",
            data: newProfile
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erro ao criar o perfil.",
            error: error.message
        });
    }
};