class BankAccount {
  id: number;
  name: string;
  private _amount: number;

  constructor(id: number, name: string, amount: number) {
    this.id = id;
    this._amount = amount;
    this.name = name;
  }
}

const myAccount = new BankAccount(123, 'Arif', 10000);
