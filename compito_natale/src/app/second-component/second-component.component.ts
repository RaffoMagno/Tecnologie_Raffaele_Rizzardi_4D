import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  visualizzaSupereroi: boolean = false;
  testoBottone = 'Mostra supereroi'
  supereroi = [
    { nome: 'Batman', primaApparizione: 1939, poteri: 'Intelletto, tecniche combattive' },
    { nome: 'Superman', primaApparizione: 1938, poteri: 'Super-forza, volo, vista laser, indistruttibilità' },
    { nome: 'Wonder Woman', primaApparizione: 1941, poteri: 'Super-forza, volo, tecniche combattive' },
    { nome: 'Lanterna Verde', primaApparizione: 1940, poteri: 'Creazione di oggetti, volo' },
    { nome: 'Flash', primaApparizione: 1940, poteri: 'Super-velocità' },
    { nome: 'Acquaman', primaApparizione: 1941, poteri: 'Resistenza e respirazione in acqua' }
  ];

  toggleVisualizzaSupereroi() {
    this.visualizzaSupereroi = !this.visualizzaSupereroi;
    this.testoBottone = this.visualizzaSupereroi ? 'Nascondi supereroi' : 'Mostra supereroi';
  }
}
