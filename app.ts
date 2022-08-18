import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { SpecialAccount } from "./class/SpecialAccount2";

const peopleAccount = new PeopleAccount(1, "Nath", 10);

peopleAccount.deposit(100);
peopleAccount.withdraw(30);
peopleAccount.getBalance();

const companyAccount = new CompanyAccount("DIO", 20);

companyAccount.getLoan(500);
companyAccount.getBalance();

const specialAccount = new SpecialAccount("Special", 30);

specialAccount.deposit(100);
specialAccount.getBalance();