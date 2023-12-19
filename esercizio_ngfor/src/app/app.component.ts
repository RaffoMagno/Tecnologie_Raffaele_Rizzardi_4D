import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercizio_ngfor';
  listaBarche = [
    { id: 1, name: '29er' },
    { id: 2, name: '49er' },
    { id: 3, name: 'Laser' },
    { id: 4, name: 'Nacra 17' },
  ];
}
