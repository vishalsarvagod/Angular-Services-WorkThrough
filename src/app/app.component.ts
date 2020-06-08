import { Component, OnInit } from '@angular/core';
import { AccountDataService } from './Services/account-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountDataService]
})
export class AppComponent implements OnInit{
  accounts : {name:string,status:string}[] = [];

  constructor(private accountService: AccountDataService){}
  ngOnInit(){
    this.accounts = this.accountService.accounts;
  } 
  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }

}