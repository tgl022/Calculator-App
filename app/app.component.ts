import { Component, OnInit } from '@angular/core';
import Log from './../server/models/Log.js';
import { CalculatorService } from './services/calculator.service';
import { LogService } from './services/log.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent implements OnInit {

  logs: Log[];

  constructor(
    private calculatorService: CalculatorService,
    private logService: LogService
  ) { }

  ngOnInit() {
    this.logService.getLogs().subscribe(data => {
      this.logs = data;
    });
    console.log('Logs loaded');
  }

  evalString = '';

  updateLogs() {
    //get last 10 logs
    this.logService.getLogs().subscribe(data => {
      this.logs = data;
    });
  }

  clearScreen() {
    this.evalString = '';
  }

  addToString(char) {
    if(char == '=') {
      var solution = this.calculatorService.eval(this.evalString);
      this.pushLog(this.evalString + '= ' + solution);
      this.evalString = solution;
    } else {
      this.evalString += char;
    }
  }

  pushLog(logMessage: string) {
    //push a new log
    var log = {
      message: logMessage
    };
    this.logService.addLog(log)
      .subscribe(log => {
        console.log("Pushed new log: " + logMessage);
      });
    this.updateLogs();
  }
}
