const getAllDataDB = require('../repository/environment.repository');

async function getAllData() {
    const data = await getAllDataDB()
    return data;
}; 

async function getById(id){
    const data = await getById(id);
    return data;
}

module.exports = { getAllData };
