import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../Services/logging.service';
import { AccountDataService } from '../Services/account-data.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  

  constructor( private loggingService: LoggingService,private accountService: AccountDataService) { }

  ngOnInit(): void {
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
    //this.loggingService.logStatusChanged(accountStatus);
  }
}
