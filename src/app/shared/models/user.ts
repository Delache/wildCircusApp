export class User {
  public id: number;
  public firstname?: string;
  public lastname?: string;
  public email?: string;
  public username?: string;
  public password?: string;
  public email_active?: boolean;
  public role?: string;

  constructor(input: User) {
    Object.assign(this, input);
  }
}
