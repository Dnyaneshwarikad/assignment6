import { Component } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
  <h1>inside inline component-</h1>
  <h2>Marvellous Infosystems</h2>

`,
  styles: [`
    h2{
      color:blue;
    }
  `]
})
export class InlineComponent {
  
  public str ="";


}
