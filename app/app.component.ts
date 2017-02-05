import { Component, OnInit } from '@angular/core';
import Log from './../server/models/Log.js';
import { Calculator } from './calculator';
import { LogService } from './services/log.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private calculator: Calculator,
    private logService: LogService
  ) { }

  evalString = '';

  calculate() {
    this.evalString += this.calculator.solution;
    console.log(this.evalString);
  }

  addToString(char) {
    this.evalString += char;
    if(char === '=')
      this.calculate();
  }

  pushLog() {
    //push a new log
  }

  getLog() {
    //get last 10 logs
    // this.logService.getLogs().subscribe(data => {
    //   this.word = data.word;
  }

  ngOnInit() {
    this.getLog();
  }
}
