import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  componentTitle = "I Am App Component From Component.ts";

  clickHandler(){
  	alert("I Am Clicked");
  }
}
