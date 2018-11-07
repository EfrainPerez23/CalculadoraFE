import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { AnalizadorLexico } from './lexico/model/analizador-lexico';
import { Result } from './models/result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public calculator = '';
  public data: { result: Result; lexico: AnalizadorLexico[] };

  public constructor(private calculatorService: CalculatorService) {}


  public calcular(): void {
    this.data = null;
    this.calculatorService.calculate({ data: this.calculator }).subscribe(
      (data: { result: Result; lexico: AnalizadorLexico[] }): void => {
        if (data) {
          this.data = data;
        }
      }
    );
  }
}
