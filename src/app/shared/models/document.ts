export class Document {
  public title: string;
  public description: string;
  public createAt: string;
  public name: string;

  constructor(input?: Document) {
    if (input) {
      Object.assign(this, input);
    }
  }
}

