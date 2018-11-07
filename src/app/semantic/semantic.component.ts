import { Component, OnInit, Input } from '@angular/core';
import { ErrorResult } from '../models/result';

@Component({
  selector: 'app-semantic',
  templateUrl: './semantic.component.html',
  styleUrls: ['./semantic.component.scss']
})
export class SemanticComponent implements OnInit {

  @Input() semantico: ErrorResult[];

  public constructor() { }

  public ngOnInit(): void { }

}
