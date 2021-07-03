export interface IPadd{
  id: Number,
  title: String,
  content: String
}

export class Padd{
  private _id: Number;
  private _title: String;
  private _description: String;

  constructor(id: Number, title: String, description: String) {
    this._id = id;
    this._title = title;
    this._description = description;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }
}
