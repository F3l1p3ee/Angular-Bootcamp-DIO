import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonLabel: string = "Carro"
  buttonSecond: string = "Adicionar aos favoritos"
  title = 'bootcampPotenciaTechAngular';
}
