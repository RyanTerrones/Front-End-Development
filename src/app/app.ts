import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list-component/list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //varibles
  count:number = 0;
  hide:boolean=false;

  //method for when img is double clicked, it will hide/show the img
  onDoubleClicked(){
    if(this.hide === true){
      this.hide = false;
    }
    else{
      this.hide = true;
    }
  }

  //method to show a counter when button is clicked
  onButtonClicked(){
    this.count++;
  }
}
