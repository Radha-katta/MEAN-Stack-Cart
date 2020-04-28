export class User {

  _id: string;
  userId: string;
  password: string;

  constructor( userId: string, password: string) {
    //this._id = _id;
    this.userId = userId;
    this.password = password;
  }
}
