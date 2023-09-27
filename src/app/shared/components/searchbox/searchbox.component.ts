import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styles: [
  ]
})
export class SearchboxComponent {

  // Ingresa datos al componente de padre a hijo

  @Input()
  public placeholder: string = '';

  //Emite datos desde este componente a su componente padre
  @Output() onValue = new EventEmitter<string>();


  emitValue(value: string ):void{
    this.onValue.emit(value);

  }
}
