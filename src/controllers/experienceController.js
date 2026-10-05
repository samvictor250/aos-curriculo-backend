import Experience from '../models/Experience.js';
import Profile from '../models/Profile.js';

export const getAllExperiences = async (req, res) => {
    try {
        const experiences = await Experience.findAll({
            include: [Profile]
        });

        if (experiences.length === 0) {
            return res.status(404).json({
                message: "Nenhuma experiência encontrada no sistema."
            });
        }

        return res.status(200).json({
            message: "Experiências encontradas com sucesso!",
            data: experiences
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erro interno no servidor.",
            error: error.message
        });
    }
};

export const getExperienceById = async (req, res) => {
    try {
        const { id } = req.params;
        const experience = await Experience.findByPk(id, {
            include: [Profile]
        });

        if (!experience) {
            return res.status(404).json({
                message: "Experiência não encontrada."
            });
        }

        return res.status(200).json({
            message: "Experiência encontrada com sucesso!",
            data: experience
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erro interno no servidor.",
            error: error.message
        });
    }
};

export const createExperience = async (req, res) => {
    try {
        const { company, role, startDate, endDate, description, ProfileId } = req.body;

        const profile = await Profile.findByPk(ProfileId);
        if (!profile) {
            return res.status(404).json({
                message: "Perfil não encontrado para vincular a experiência."
            });
        }

        const newExperience = await Experience.create({
            company,
            role,
            startDate,
            endDate,
            description,
            ProfileId
        });

        return res.status(201).json({
            message: "Experiência criada com sucesso!",
            data: newExperience
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erro ao criar a experiência.",
            error: error.message
        });
    }
};

export const updateExperience = async (req, res) => {
    try {
        const { id } = req.params;
        const { company, role, startDate, endDate, description } = req.body;

        const experience = await Experience.findByPk(id);

        if (!experience) {
            return res.status(404).json({
                message: "Experiência não encontrada para atualizar."
            });
        }

        await experience.update({
            company,
            role,
            startDate,
            endDate,
            description
        });

        return res.status(200).json({
            message: "Experiência atualizada com sucesso!",
            data: experience
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erro ao atualizar a experiência.",
            error: error.message
        });
    }
};

export const deleteExperience = async (req, res) => {
    try {
        const { id } = req.params;

        const experience = await Experience.findByPk(id);

        if (!experience) {
            return res.status(404).json({
                message: "Experiência não encontrada para deletar."
            });
        }

        await experience.destroy();

        return res.status(204).send();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erro ao deletar a experiência.",
            error: error.message
        });
    }
};