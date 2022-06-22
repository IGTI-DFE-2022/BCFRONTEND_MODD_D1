import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceFormComponent } from './price-form/price-form.component';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [AppComponent, PriceFormComponent, ResultComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
