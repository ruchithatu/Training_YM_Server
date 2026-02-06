import db from "../Db/db.js";

const table="user";

class UserModel{
    static async createUserModel({name,email,password}){
        const sql=`INSERT INTO ${table} (name,email,password) VALUES (?,?,?)`;
        const [result]=await db.execute(sql,[name,email,password]);
        //insertid,row affected
        return result.insertId;
    }
    static async getAllUsersModel(){
        const sql =`SELECT * FROM ${table}`;
        const [rows]=await db.execute(sql);
        return rows;
    }
    static async updateUsersPasswordModel(id, {password}){
        const sql =`UPDATE ${table} SET password=? where id=?`;
        const[update]=await db.execute(sql,[password,id]);
        return update.affectedRows;
    }
    static async deleteUserModel(id){
        const sql=`DELETE FROM ${table} WHERE id=?`;
        const [deleteUser]=await db.execute(sql,[id]);
        return deleteUser.affectedRows;
    }
}
export default UserModel;