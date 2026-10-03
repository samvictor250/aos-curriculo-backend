import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';
import Profile from './Profile.js';

const Project = sequelize.define('Project', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    techStack: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true
});

Profile.hasMany(Project, { onDelete: 'CASCADE' });
Project.belongsTo(Profile);

export default Project;