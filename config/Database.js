import {Sequelize} from "sequelize";

const db = new Sequelize('db_reputasi','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;