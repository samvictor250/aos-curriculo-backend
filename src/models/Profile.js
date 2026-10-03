import { DataTypes } from 'sequelize';
import sequelize from '../configs/database.js';

const Profile = sequelize.define('Profile', {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    headline: {
        type: DataTypes.STRING,
        allowNull: false
    },
    summary: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true }
    },
    github: {
        type: DataTypes.STRING,
        allowNull: true
    },
    linkedin: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true
});

export default Profile;