import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users', {
    jumlah1: DataTypes.STRING,
    jumlah2: DataTypes.STRING,
    jumlah3: DataTypes.STRING,
    jumlah4: DataTypes.STRING,
    jumlah5: DataTypes.STRING,
    jumlah6: DataTypes.STRING,
    jumlah7: DataTypes.STRING,
    jumlah8: DataTypes.STRING,
    jumlah9: DataTypes.STRING,
    jumlah10: DataTypes.STRING,
    jumlah11: DataTypes.STRING,
    jumlah12: DataTypes.STRING,
    jumlah13: DataTypes.STRING,
    jumlah14: DataTypes.STRING,
    jumlah15: DataTypes.STRING,
    jumlah16: DataTypes.STRING,
    jumlah17: DataTypes.STRING,
    jumlah18: DataTypes.STRING,
    jumlah19: DataTypes.STRING,
    jumlah20: DataTypes.STRING,
    jumlah21: DataTypes.STRING,
    jumlah22: DataTypes.STRING,
    jumlah23: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async ()=>{
    await db.sync();
})();