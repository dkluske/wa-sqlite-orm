function Id() {
    return Reflect.metadata("id", true);
}

function getId(): boolean {
    return Reflect.getMetadata("id", Id);
}

export {Id, getId};