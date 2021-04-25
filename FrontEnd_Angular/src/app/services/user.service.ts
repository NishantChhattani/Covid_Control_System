import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tracing } from '../model/tracing';
//import { Tracing } from 'trace_events';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8081/api/test/user';
  private pmUrl = 'http://localhost:8081/api/test/pm';
  private adminUrl = 'http://localhost:8081/api/test/admin';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

  public findAll(): Observable<Tracing[]> {
    return this.http.get<Tracing[]>(this.userUrl);
  }

  public save(user: Tracing) {
    return this.http.post<Tracing>(this.userUrl, user);

  }
}
