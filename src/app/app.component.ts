import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { AnalizadorLexico } from './lexico/model/analizador-lexico';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public calculator = '';
  public data: {result: string[], lexico: AnalizadorLexico[]};

  public constructor(private calculatorService: CalculatorService) {  }

  public calcular(): void {
    this.calculatorService.calculate({data: this.calculator}).subscribe((data: {result: string[], lexico: AnalizadorLexico[]}): void => {
      if (data) {
        this.data = data;
      }
    });
  }
}
