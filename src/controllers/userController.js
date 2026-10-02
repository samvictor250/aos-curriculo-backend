import User from '../models/User.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    if (users.length === 0) {
      return res.status(404).json({ message: "Nenhum usuário encontrado no sistema." });
    }
    return res.status(200).json({ 
      message: "Usuários encontrados com sucesso", 
      data: users 
    });

  } catch (error) {
    return res.status(500).json({ message: "Erro interno ao buscar usuários", error: error.message });
  }
};

export const createUser = (req, res) => {
    try {
      res.status(200).json({ mensagem: "Usuario criado com sucesso" });
    } catch (error) {
      res.status(500).json({ mensagem: "Erro ao criar usuario"});
    }
};