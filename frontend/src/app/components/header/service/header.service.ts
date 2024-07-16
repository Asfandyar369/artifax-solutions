import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logo } from '../../../interface/Navbar';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(private http: HttpClient) { }
  public getAllNavbars(): Observable<Logo> {
    return this.http.get<Logo>(`${environment.apiUrl}/header`);
  }
}
