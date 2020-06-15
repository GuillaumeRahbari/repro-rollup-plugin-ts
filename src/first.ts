interface ConstructorParams {
  field: string;
}

export class First {
  private field: string;
  constructor({ field }: ConstructorParams) {
    this.field = field;
  }
}
