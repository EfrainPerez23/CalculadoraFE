import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LexicoComponent } from './lexico/lexico.component';
import { CalculatorService } from './calculator.service';
import { CountUpModule } from 'countup.js-angular2';
import { SemanticComponent } from './semantic/semantic.component';

@NgModule({
  declarations: [
    AppComponent,
    LexicoComponent,
    SemanticComponent,
  ],
  imports: [
    BrowserModule,
    CodemirrorModule,
    FormsModule,
    HttpClientModule,
    CountUpModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
