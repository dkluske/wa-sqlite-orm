import {typeToSql} from "../Database";

/**
 * T:Entity
 * I:any id object
 */
export abstract class Table<T, I> {
    name: string;
    entity: T;

    constructor(name: string, entity: T) {
        this.name = name;
        this.entity = entity;
    }

    createTable(): string {
        const entity: any = this.entity;

        const props: string[] = typeof entity.keys === "function" ? entity.keys() : [];

        const columns: string[] = [];

        let primaryExists = false;

        for (const prop of props) {
            const designType: Function | undefined = Reflect.getMetadata("design:type", entity, prop);
            const sqlType = designType ? typeToSql(designType) : "TEXT";

            const isId: boolean = !!Reflect.getMetadata("id", entity, prop);
            const isNullable: boolean = !!Reflect.getMetadata("nullable", entity, prop);

            if (isId && primaryExists) {
                throw new Error(`Entity ${entity.constructor.name} has multiple primary keys`);
            } else if (isId) {
                primaryExists = true;
            }

            let columnDef = `${prop} ${sqlType}`;
            if (isId) {
                columnDef += " PRIMARY KEY";
            }
            if (!isNullable && !isId) {
                columnDef += " NOT NULL";
            }
            columns.push(columnDef);
        }

        const sql = `CREATE TABLE IF NOT EXISTS ${this.name} (\n        ${columns.join(",\n        ")}\n    )`;

        return sql;
    }

    selectAll(): T[] {
        return [];
    }

    selectById(id: I): T | undefined {
        return undefined;
    }

    insert(entity: T): I | undefined {
        return undefined;
    }
}