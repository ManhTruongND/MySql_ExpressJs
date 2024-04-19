import config from "@/config";
import mysql from "mysql2";
async function query(sql: any, params: any) {
  const connection = await mysql.createConnection(config.db);
  const [results]: any = await connection.execute(sql, params);

  return results;
}
export default {
  query,
};
