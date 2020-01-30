export class Artist {
  public id: number;
  public username: string;
  public speciality?: string;
  public description?: string;
  public motto?: string;
  public link?: string;

  constructor(input: Artist) {
    Object.assign(this, input);
  }
}
