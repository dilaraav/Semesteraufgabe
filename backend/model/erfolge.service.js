const db = require('../model/db.js');
const {Op} = require('sequelize');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

//einfachere Funktionen
async function getAll() {
    const erfolge = await db.Erfolge.findAll();
    return erfolge.map(x => basicDetails(x));
}

async function getById(id) {
    const erfolge = await getErfolge(id);
    return basicDetails(erfolge);
}

async function create(paypload) {
    const erfolge = new db.Erfolge(paypload);

    await erfolge.save();
    return basicDetails(erfolge);
}

async function update(id, params) {
    const erfolge = await getErfolge(id);

    Object.assign(erfolge, params);

    await erfolge.save();

    return basicDetails(erfolge);
}


async function _delete(id) {
    const erfolge = await getErfolge(id);
    await erfolge.destroy();
}

async function getErfolge(id) {
    const erfolge = await db.Erfolge.findByPk(id);
    if (!erfolge) throw 'Success not found';
    return erfolge;
}

//BasicDetails gibt alle DEtails aus der Tabelle Erfolge aus
function basicDetails(erfolge) {
    return {
        id: erfolge.id,
        datum: erfolge.datum,
        gewicht: erfolge.gewicht,
        arm: erfolge.arm,
        brust: erfolge.brust,
        taille: erfolge.taille,
        huefte: erfolge.huefte,
        oberschenkel: erfolge.oberschenkel
    }
}
