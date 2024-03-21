import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  { //voy a inyectar mi DbzService
  constructor(private dbzService: DbzService) {}

    get characters(): Character[] {
      return [...this.dbzService.characters] //creo una copia de cada uno de los personajes
    }

    onDeleteCharacter(id:string):void {
      this.dbzService.deleteCharacterBydId(id);
    }

    onNewCharacter( character: Character) : void {
      this.dbzService.addCharacter(character)
    }


}

