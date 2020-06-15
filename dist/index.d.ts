interface ConstructorParams {
    field: string;
}
declare class First {
    private field;
    constructor({ field }: ConstructorParams);
}
interface ConstructorParams$0 {
    field: string;
    otherField: string;
}
declare class Second {
    private field;
    private otherField;
    constructor({ field$0, otherField }: ConstructorParams$0);
}
export { First, Second };
