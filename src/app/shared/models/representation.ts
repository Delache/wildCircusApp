export class Representation {
    public id?: number;
    public city: string;
    public adress: string;
    public date: string;
    public time: string;
    public full: boolean;

    constructor(input?: Representation) {
      if (input) {
        Object.assign(this, input);
      }
    }
  }
