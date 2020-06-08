import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logStatusChanged(status: string){
    console.log('A server status changed, New Status '+status);
  }
  constructor() { }
}
