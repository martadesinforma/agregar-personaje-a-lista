import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Marta';
  public age: number = 24;

  get capitalizedName(): string { //los get no es mas que una propiedad que se ve como una propiedad pero realmente es un metodo
    return this.name.toUpperCase();
  }

  getHeroDescription(): string { // es un metodo
    return `${this.name} - ${this.age}`
  }

  changeName(): void { //EXPLICAR DIFERENCIA CON changeAge()
    this.name = 'Uriel'
  }

  changeAge(): number {
    return this.age = 31;
  }

  resetForm(): void {
    this.name = 'Marta';
    this.age = 24;
  }
}
