import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnalizadorLexico } from './lexico/model/analizador-lexico';
import { Result } from './models/result';
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private calculatePath = '/calculate';

  public constructor(private http: HttpClient) { }


  public calculate(data: {data: string}): Observable<{result: Result, lexico: AnalizadorLexico[]}> {
    return this.http.post<{result: Result, lexico: AnalizadorLexico[]}>(`${environment.apiUrl}${this.calculatePath}`, data);
  }

}
