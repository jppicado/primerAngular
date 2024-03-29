import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h2>{{titulo}}</h2>

<h3>La base es: <span>{{base}}</span></h3>
<button (click)="acumular(base)">+ {{base}}</button>
<span>{{numero}}</span>
<button (click)="acumular(-base)">- {{base}}</button>
    
`
})

export class ContadorComponent{
   
    titulo = 'bases';
    numero: number = 10;
  
    base: number = 5;
  
    acumular(valor: number){
      this.numero += valor;
    }
}