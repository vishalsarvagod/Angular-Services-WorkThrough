import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor(private loggingService: LoggingService) { }
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Child account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  addAccount(name: string, status: string) {
    this.accounts.push({name: name,status: status});
    this.loggingService.logStatusChanged(status);
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChanged(status);
  }
}
