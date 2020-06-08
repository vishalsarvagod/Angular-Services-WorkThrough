import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../Services/logging.service';
import { AccountDataService } from '../Services/account-data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  // providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  constructor(private loggingService: LoggingService,private accountService: AccountDataService) { }

  ngOnInit(): void {
  }
  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.statusChanged.emit({id: this.id, newStatus: status});
    //this.loggingService.logStatusChanged(status);
  }
}
