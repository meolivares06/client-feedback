export interface StatementData {
  id: string;
  text: string;
  read: boolean;
  createdAt: Date;
}

export class Statement {

  private _id: string;
  private _text: string;
  private _read: boolean;
  private _createdAt: Date;

  constructor(statementData: StatementData) {
    this._id = statementData.id;
    this._text = statementData.text;
    this._read = statementData.read;
    this._createdAt = statementData.createdAt;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get read(): boolean {
    return this._read;
  }

  set read(value: boolean) {
    this._read = value;
  }
}
