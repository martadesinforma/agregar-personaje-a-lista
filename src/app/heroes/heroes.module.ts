import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";




@NgModule({
  declarations: [
    HeroComponent,
    ListComponent

  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule //porque nuestros componentes hero y list hacen uso de ngIf y de ngFor, por eso tenemos que importar el CommonModule
  ]
})
export class HeroesModule {}
