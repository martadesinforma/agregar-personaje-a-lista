import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() //para vincular informacion desde el padre que es main-page.component.ts al hijo y asi que se muestren los nuevos personajes en la lista
  public characterList: Character[] = []  //para que se muestre este array de objetos en el html tenemos que escribir el nombre del arreglo entre llaves [characterList] en el selector del main.page.component.html


  @Output()//para poder emitir el onDeleteCharacter  al  boton del elemento padre que es main-page.component.ts
  public onDelete: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id: string): void { //quiero emitir el ID del personaje
    console.log({id})
    this.onDelete.emit(id)
  }
}
