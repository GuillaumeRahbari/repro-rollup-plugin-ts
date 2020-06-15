class First {
    constructor({ field }) {
        this.field = field;
    }
}

class Second {
    constructor({ field, otherField }) {
        this.field = field;
        this.otherField = otherField;
    }
}

export { First, Second };
