import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output() //para poder emitir el onNewCharacter que emite un objeto con la interface Character al elemento padre que es main-page.component.ts
  public onNewCharacter: EventEmitter<Character> = new EventEmitter()

  public character: Character = { //quiero que se modifique los valores de este objeto con los valores que ingresamos por el formulario de name y power. Para ello escribo en los input del formulario [(ngModel)] ="character.name" y [(ngModel)] ="character.power"
    //Este nuevo objeto que se crea quiero agregarlo a mi array de objetos (characters) que se encuentra en main-page.component.ts
    name: '',
    power: 0
  };

  emitCharacter(): void { //cuando le doy al boton Agregar del html quiero tomar el objeto que se esta creando
    console.log(this.character)
    if (this.character.name.length === 0) return;

    const newCharacter = { name: this.character.name, power: this.character.power }
    //hago uso del onNewCharacter que emite el objeto con el name y el power
    this.onNewCharacter.emit(newCharacter);

    //para limpiar el componente: es lo mismo que poner this.character = {name: '', power: 0};
    this.character.name = '';
    this.character.power = 0;
  }
}
