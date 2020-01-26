const dbName = 'lego';
const dbUserName = 'admin';
const dbUserPass = '***';
const dbPort = '***';

module.exports = {
    "SERVER_URL": "http://localhost:3000",
    "serverPort": "",
    "mongo_URL":  `mongodb://${dbUserName}:${dbUserPass}@ds359298.mlab.com:${dbPort}/${dbName}`,
    "jwtSecret":  `SECRET`,
};