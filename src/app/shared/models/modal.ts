export class Modal {
  public title: string;
  public description: string;
  public deleteButton: boolean;

  constructor(input: Modal) {
    Object.assign(this, input);
}
}
