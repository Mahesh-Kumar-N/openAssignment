import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BaseComponent } from './base/base.component';
import { CalculatorComponent } from './base/calculator/calculator.component';
import { RangeSliderComponent } from './base/calculator/range-slider/range-slider.component';
import { LoanFeaturesComponent } from './loan-features/loan-features.component';
import { CardComponent } from './loan-features/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BaseComponent,
    CalculatorComponent,
    RangeSliderComponent,
    LoanFeaturesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
