function Nullable() {
    return Reflect.metadata("nullable", true);
}

function getNullable(): boolean {
    return Reflect.getMetadata("nullable", Nullable);
}

export {Nullable, getNullable};