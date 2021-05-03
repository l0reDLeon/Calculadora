import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {

  constructor() { }
  // display: DisplayComponent = new DisplayComponent;
  //declaramos las variables que vamos a usar

  //estas dos son en las que vamos a guardar a operador b
  regex1:string;  //a
  regex2:string;  //b

  switch:boolean=true;//con esta sabemos en cuál de los dos escribir, se detalla en func()
  on:boolean=false;

  cache:string="";//aquí vamos a guardar el último resultado
  input:string="";//esta la vamos a usar para ver arriba qué estamos escribiendo
  resultado:string;//resultado :I

  //este es el arreglo de los botones
  numberGroups=[
    [7,8,9,'x'],
    [4,5,6,'-'],
    [1,2,3,'+'],
    ['C',0,'/','=']
  ];

  ngOnInit() {//inicializamos!
    this.input="";
    this.regex1="";
    this.regex2="";
    this.resultado="0";
  }

//esta función es la que se ejecuta al hacer click en un botón
  func(letra:string){
    this.input+=letra;//aquí guardo lo que se clickean los botones en una variable 'input' que luego muestro en pantalla

    //este if es para guardar la primera parte de la operación 'a oparitmetica b'
    //antes de la operación aritmética se guarda en regex1, después de la operación se guarda en regex2
    if(letra != 'x' && letra != '+' && letra != '-' && letra != '/' && letra != 'c' && letra != '='){
      if(this.switch){//agrega a regex1
        this.regex1=this.regex1+letra;
      }
      else{//agrega a regex2
        this.regex2=this.regex2+letra;
      }
    }
    else{//cambia el switch con el que sé si es regex1 o regex2
      this.switch= !this.switch;
    }

    if(letra=='C'){//funcion borrar display
      this.input="";
      this.regex1="";
      this.regex2="";
      this.resultado="0";
      this.send("C");
    }

    console.log(this.input);//logs
    console.log("regex1= "+this.regex1);
    console.log("regex2= "+this.regex2);
    console.log("resultado= "+this.resultado);

    if(letra === '='){//aquí se manda a llamar a la función que analiza la entrada
      this.analyze(this.input);

      console.log(this.input);
      this.input="";//borro el input

      this.switch=true;//como ya mandamos la info. ahora toca ingresar de nuevo la a de a oparitmetica b, por eso
                       //vuelvo a hacer el switch = true, así registrará de nuevo en regex1
    }
  }

  analyze(cadena){//función para analizar la cadena
                  //¿Qué analiza?
                  //Busca el operador con el que mandamos la información a la función calcular para que haga
                  //regex1 operador regex2
    let i=0;
    let operador:string;

    for(i;i<cadena.length;i++){//
      switch(cadena[i]){
        case 'x':
          operador='x';
        break;

        case '-':
          operador='-';
        break;

        case '+':
          operador="+";
        break;

        case '/':
          operador="/";
        break;

        case 'C':       //creo que este no sirve xd
          operador="C";
          this.input="";
        break;

        case '=':
          this.send(operador);  //aquí mandamos la info a la función display1 y luego borra los numeros, display1 manda
                                //una petición a calculate y el resultado lo muestra en la variable result, que es
                                //la que ponemos como parámetro en el componente de display, el cual solo muestra
                                //el input y el resultado en pantalla
        break;
      }
    }
  }

  clear(){ //borra todo menos el resultado
    this.input="";
    this.regex1="";
    this.regex2="";
  }

  send(operador:string){  //es la función que llama a display1 y luego borra todo, aunque si quieren la podemos quitar
    //comprobamos que tenga regex2
    if(this.regex2==""){
      this.input="ERROR";
      this.resultado="0";
    }
    else{//si regex1 es vacío (o sea que dieron un resultado y quieren operar sobre ese mismo resultado)
        // entonces mandamos en vez de (regex1 oparitmetico regex2) => (resultado oparitmetico regex2)
      if(this.regex1==""){
        this.display1(this.resultado,operador,this.regex2);
        //console.log("esto debería ser nulo"+this.regex1)
      }
      else{
        this.display1(this.regex1,operador,this.regex2);
      }
    }
    this.clear();
  }

  display1(sentence1:string,op:string,sentence2:string){
    let result=this.calculate(sentence1,op,sentence2);
    this.resultado=result.toString();
  }

  calculate(sentence1:string,op:string,sentence2:string){ //función que calcula operando a oparitmetico b
    //como sentence1 y sentence2 son strings, p1 y p2 son esos strings convertidos a float, con los que podemos operar
    let p1=parseFloat(sentence1);
    let p2=parseFloat(sentence2);
     //logs
    console.log("p1: "+p1);
    console.log("p2: "+p2);
    console.log("s1: "+sentence1);
    console.log("s2: "+sentence2);
    console.log("resultado: "+this.resultado);

    let result:number; //declaramos la variable de resultado

    switch(op){//asigna cada operación con su símbolo correspondiente
      case 'x':
        result=p1*p2;
      break;

      case '-':
        result=p1-p2;
      break;

      case '+':
        result=p1+p2;
      break;

      case '/':
        result=p1/p2;
      break;

      case 'C':
        result=0;
      break;
    }
    console.log("= "+result);

    return result; //retorna el resultado y se resultado lo usamos en display1 para darle input al componente display
  }
}
