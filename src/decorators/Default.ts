function Default(value: any) {
    return Reflect.metadata("default", value);
}

function getDefault(): any {
    return Reflect.getMetadata("default", Default);
}

export {Default, getDefault};