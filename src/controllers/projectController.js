import Project from '../models/Project.js';
import Profile from '../models/Profile.js';

export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.findAll({
            include: [Profile]
        });

        if (projects.length === 0) {
            return res.status(404).json({
                message: "Nenhum projeto encontrado no sistema."
            });
        }

        return res.status(200).json({
            message: "Projetos encontrados com sucesso!",
            data: projects
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erro interno no servidor.",
            error: error.message
        });
    }
};

export const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findByPk(id, {
            include: [Profile]
        });

        if (!project) {
            return res.status(404).json({
                message: "Projeto não encontrado."
            });
        }

        return res.status(200).json({
            message: "Projeto encontrado com sucesso!",
            data: project
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erro interno no servidor.",
            error: error.message
        });
    }
};

export const createProject = async (req, res) => {
    try {
        const { title, description, techStack, url, ProfileId } = req.body;

        const profile = await Profile.findByPk(ProfileId);
        if (!profile) {
            return res.status(404).json({
                message: "Perfil não encontrado para vincular o projeto."
            });
        }

        const newProject = await Project.create({
            title,
            description,
            techStack,
            url,
            ProfileId
        });

        return res.status(201).json({
            message: "Projeto criado com sucesso!",
            data: newProject
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erro ao criar o projeto.",
            error: error.message
        });
    }
};

export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, techStack, url } = req.body;

        const project = await Project.findByPk(id);

        if (!project) {
            return res.status(404).json({
                message: "Projeto não encontrado para atualizar."
            });
        }

        await project.update({
            title,
            description,
            techStack,
            url
        });

        return res.status(200).json({
            message: "Projeto atualizado com sucesso!",
            data: project
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erro ao atualizar o projeto.",
            error: error.message
        });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;

        const project = await Project.findByPk(id);

        if (!project) {
            return res.status(404).json({
                message: "Projeto não encontrado para deletar."
            });
        }

        await project.destroy();

        return res.status(204).send();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erro ao deletar o projeto.",
            error: error.message
        });
    }
};