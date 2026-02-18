import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './acomponent/acomponent';
import { BComponent } from './bcomponent/bcomponent';
@Component({
  selector: 'root-directive',
  //import components to show both a and b
  imports: [RouterOutlet, AComponent, BComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //This is what is shown on the main page
  name:string = "Ryan";
  age:number = 22;
  protected readonly title = signal('my-first-app');
}
