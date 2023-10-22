export interface UserData {
  id: string;
  name: string;
}

export class User {
  private _id: string;
  private _name: string;

  constructor(userData: UserData) {
    this._id = userData.id;
    this._name = userData.name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}
