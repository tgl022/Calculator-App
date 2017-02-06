import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorService } from './services/calculator.service';
import { LogService } from './services/log.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    CalculatorService,
    LogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
