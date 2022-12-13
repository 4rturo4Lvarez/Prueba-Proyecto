import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GraficoBarrasComponent } from './componentes/grafico-barras/grafico-barras.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GraficoBarrasComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
