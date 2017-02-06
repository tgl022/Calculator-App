import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  eval(exp): string {
    var expArray = exp.split("");
    var solution =  this.apply(expArray[1], parseInt(expArray[0]), parseInt(expArray[2]) ).toString();
    return solution;
  }

  apply(op: string, left: number, right: number): Number {
    if (op == '+')
      return left + right;
    else if (op == '-')
      return left - right;
    else if (op == '*')
      return left * right;
    else if (op == '/')
      return left / right;
    else
      return 0;
  }
}
