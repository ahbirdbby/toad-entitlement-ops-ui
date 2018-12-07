import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(msg: string) {
    console.log(msg);
  }
  error(err: Error) {
    console.error(err);
  }
  warn(msg: string) {
    console.warn(msg);
  }
}
