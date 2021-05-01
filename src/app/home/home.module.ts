import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';
import { CalculadoraComponent } from '../componentes/calculadora/calculadora.component';
import { DisplayComponent } from '../componentes/display/display.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CalculadoraComponent, DisplayComponent]
})
export class HomePageModule {}
