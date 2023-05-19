const { getAllDataDB, getDataByIdDB, createDB, updateDB, deleteData } = require('../repository/environment.repository');

async function getAllData() {
    const data = await getAllDataDB()
    return data;
};

async function getDataById(id) {
    const data = await getDataByIdDB(id);
    return data;
};

async function create(label, category, priority) {
    const data = await createDB(label, category, priority);
    return data;
};

async function update(label, category, priority, id) {
    const data = await updateDB(label, category, priority, id);
    return data;
}

async function deleteById(id) {
    const data = await deleteData(id);
    return data;
}

module.exports = { getAllData, getDataById, create, update, deleteById };
