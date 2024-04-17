var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'ai2',
    'postgres',
    '17268015',
    {
        host: 'localhost',
        port: '5432',
        dialect: 'postgres'
    }
);

sequelize.sync();


module.exports = sequelize;