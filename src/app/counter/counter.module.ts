import { NgModule } from "@angular/core";
import { counterComponent } from "./components/counter.component";

@NgModule({
  declarations: [
    counterComponent
  ],
  exports: [
    counterComponent
  ]
})
export class CounterModule {}
