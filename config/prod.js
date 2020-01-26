const dbName = 'lego';
const dbUserName = 'admin';
const dbUserPass = '***';
const dbPort = '***';

module.exports = {
    "SERVER_URL": "http://SITENAME.com",
    "serverPort": "",
    "mongo_URL":  `mongodb://${dbUserName}:${dbUserPass}@ds359298.mlab.com:${dbPort}/${dbName}`,
    "jwtSecret":  `difbv`,
};