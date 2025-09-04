import {Id} from "../decorators/Id";
import {Nullable} from "../decorators/Nullable";

export interface Entity {
}

class SampleEntity implements Entity {
    @Id()
    id: number;

    @Nullable()
    name?: string;

    constructor(id: number, name?: string) {
        this.id = id;
        this.name = name;
    }
}