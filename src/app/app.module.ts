import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts/highcharts';
import { ChartModule } from 'angular2-highcharts';

import * as grouped from 'highcharts-grouped-categories/grouped-categories';
import * as exporting from 'highcharts/modules/exporting.src';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

export function highchartsFactory() {
  // Default options.
  highcharts.setOptions({
    global: {
      useUTC: false
    },
    lang: {
      months: [
        'Enero', 'Febrero', 'Marzo', 'Abril',
        'Mayo', 'Junio', 'Julio', 'Agosto',
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      shortMonths: [
        'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
      ]
    }
  });

  return highcharts;
}

@NgModule({
  declarations: [ AppComponent, HelloComponent ],
  imports:      [ BrowserModule, FormsModule ],
  providers:    [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory 
    }, 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
