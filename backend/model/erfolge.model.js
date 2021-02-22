const { DataTypes } = require('sequelize');

//Hier wird die Tabelle Erfolge automatisch erstellt. DAs ist das Model dazu.
module.exports = model;

function model(sequelize) {
    const attributes = {
        datum: { type: DataTypes.STRING, allowNull: false },
        gewicht: { type: DataTypes.STRING, allowNull: false },
        arm: { type: DataTypes.STRING, allowNull: false },
        brust: { type: DataTypes.STRING, allowNull: false },
        taille: { type: DataTypes.STRING, allowNull: false },
        huefte: { type: DataTypes.STRING, allowNull: false },
        oberschenkel: { type: DataTypes.STRING, allowNull: false }
    };

    return sequelize.define('Erfolge', attributes, {timestamps: false});
}