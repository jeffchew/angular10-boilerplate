import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LayoutComponent,
    LandingPageComponent,
  ],
  bootstrap: []
})
export class HomeModule { }
