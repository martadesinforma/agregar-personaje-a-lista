import { Component } from "@angular/core";

@Component({ //si yo creo un componente necesito un template y un selector
  selector: 'app-counter',//como quiero llamar yo a mi componente. Como quiero usar la clase, en este caso mi counter, en el html
  template: `
  <h1>{{title}}</h1>
  <h3>counter: {{counter}}</h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="resetBy()">reset</button>
  `,// puede ser template o templateURL. template necesita que cree el template como un string. Es mi html

})
export class counterComponent { // la clase se tranforma en un componente cuando utilice el decorador @component
// es una simple clase y para dar funcionalidad a los elementos html se hace mediante metodos
public title: string = 'Mi contador';
public counter: number = 10;

increaseBy(value:number): void { //es un metodo para agregar funcionalidad a nuestros botones -1 y +1.  Como vemos este metodo no regresa nada (void)
  this.counter = this.counter + value;

}

resetBy(): void {
  this.counter = 10;
}
}

