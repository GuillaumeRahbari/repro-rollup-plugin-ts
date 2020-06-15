interface ConstructorParams {
  field: string;
  otherField: string;
}

export class Second {
  private field: string;
  private otherField: string;
  constructor({ field, otherField }: ConstructorParams) {
    this.field = field;
    this.otherField = otherField;
  }
}
