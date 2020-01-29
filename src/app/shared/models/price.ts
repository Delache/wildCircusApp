export class Price {
  public id?: number;
  public type: string;
  public category: string;
  public value: number;

  constructor(input?: Price) {
    if (input) {
      Object.assign(this, input);
    }
  }
}

