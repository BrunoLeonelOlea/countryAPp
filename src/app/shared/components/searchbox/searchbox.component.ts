import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styles: [
  ]
})
export class SearchboxComponent {

  @Input()
  public placholder: string = '';
}
