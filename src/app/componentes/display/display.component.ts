import { Component, OnInit, Input } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {

  constructor() { 
    this.prueba();
  }

  @Input() prueba1: string;

  calcu: CalculadoraComponent = <CalculadoraComponent>{};

  ngOnInit() {
    this.test3="";
  }

  test3 = "";
  isOk = false;
  
  display1(test: string){
    this.isOk = true;
    this.test3 +=test;
    console.log(test);
  }

  prueba(){
    console.log(this.prueba1);
  }

}