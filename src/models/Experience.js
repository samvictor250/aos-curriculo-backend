import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';
import Profile from './Profile.js';

const Experience = sequelize.define('Experience', {
    company: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endDate: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: true
});

Profile.hasMany(Experience, { onDelete: 'CASCADE' });
Experience.belongsTo(Profile);

export default Experience;