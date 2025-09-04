import {Table} from "./models/Table";
import "reflect-metadata";

function typeToSql(ctor: Function): string {
    switch (ctor) {
        case Number:
            return "INTEGER"; // could be REAL for floats; simplified
        case String:
            return "TEXT";
        case Boolean:
            return "INTEGER"; // 0/1
        case Date:
            return "INTEGER"; // store as epoch millis (or TEXT ISO)
        default:
            return "TEXT"; // fallback
    }
}



export { typeToSql };