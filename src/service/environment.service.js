const getAllDataDB = require('../repository/environment.repository');

async function getAllData() {
    const data = await getAllDataDB()
    return data;
}; 

async function getDataById(id){
    const data = await getDataById(id);
    return data;
};

async function createDB(label, category, priority){
const data = await createDB(label, category, priority);
return data;
};

module.exports = { getAllData, getDataById, createDB };
