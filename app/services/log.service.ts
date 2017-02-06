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
         .map(res => res.json().data)
         .catch(this.handleError);
  }

  addLog(body: Object) :  Observable<Log[]>{
    let bodyString = JSON.stringify(body);
    let headers      = new Headers({ 'Content-Type': 'application/json' });
    let options       = new RequestOptions({ headers: headers });

    return this.http.post(this.logsUrl, body, options)
          .map((res:Response) => res.json())
          .catch(this.handleError);
  }


/**
 * Handle any errors from the API
 */
  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body   = err.json() || '';
      let error  = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }


}
