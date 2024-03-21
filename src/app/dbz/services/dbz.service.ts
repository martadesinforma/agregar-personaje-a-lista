import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';


//Injectable es nuestro decorador que le dice que trate nuestra clase como un servicio
@Injectable({ providedIn: 'root' }) // {providedIn: 'root'} nos sirve para no tener que definir este servicio en app.module.ts
export class DbzService {
  //necesito enviar este listado de personajes a mi list.component.ts para ello uso en la hoja list.component.ts el @Input()
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7000
  }];

  //quiero agregar al arreglo characters los personajes que ingrese por el formulario:
  addCharacter(character: Character): void {
    const newCharacter:Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }

    this.characters.push(newCharacter);
  }

  //quiero eliminar el personaje de la lista cuando pulse la X basandose en su ID
  deleteCharacterBydId(id: string) {
    this.characters = this.characters.filter(character => character.id !== id); //quiero que el array de character contenga todos los character menos el que su id es el que estoy ingresando como argumento
  }

}
