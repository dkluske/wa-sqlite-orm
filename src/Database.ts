import {Table} from "./models/Table";
import "reflect-metadata"

function createTable(table: Table) {
    let entity = table.entity;



    let sql = `CREATE TABLE IF NOT EXISTS ${table.name} (
        
    )`;
}