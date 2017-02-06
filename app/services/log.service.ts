import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import Log from './../../server/models/Log.js';
import 'rxjs/add/operator/map';

@Injectable()
export class LogService {

  private logsUrl = '/logs';

  constructor(private http: Http) { }


  getLogs() :  Observable<Log[]> {
     return this.http.get(this.logsUrl)
         .map((res:Response) => res.json())
         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addLog(body: Object) :  Observable<Log[]>{
    let bodyString = JSON.stringify(body);
    let headers      = new Headers({ 'Content-Type': 'application/json' });
    let options       = new RequestOptions({ headers: headers });

    return this.http.post(this.logsUrl, body, options)
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
