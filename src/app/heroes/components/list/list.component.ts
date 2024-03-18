import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['spiderman', 'ironman', 'hulk', 'she hulk', 'thor'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop(); //si hago const deletedHero? = this.heroNames.pop(); esta variable solo existe en el scope dentro de la funcion removeLastHero(). Para poder sacarla fuera y hacer referencia a ella en el html, tenemos que crear una propiedad llamada deleteHero fuera de este scope e igualarla a this.heroNames.pop()
  }
}
