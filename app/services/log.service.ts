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
         //...errors if any
         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addLog(body: Object) :  Observable<Log[]>{
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option


    return this.http.post(this.logsUrl, body, options) // ...using post request
          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if
  }

}
