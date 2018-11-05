import { Component, OnInit, Input } from '@angular/core';
import { AnalizadorLexico } from './model/analizador-lexico';

@Component({
  selector: 'app-lexico',
  templateUrl: './lexico.component.html',
  styleUrls: ['./lexico.component.scss']
})
export class LexicoComponent implements OnInit {


  @Input() lexico: AnalizadorLexico[];

  public constructor() { }

  public ngOnInit(): void { }

}
