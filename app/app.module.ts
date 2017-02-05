import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Calculator } from './calculator';
import { LogService } from './services/log.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Calculator,
    LogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
