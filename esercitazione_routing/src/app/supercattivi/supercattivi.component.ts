import { Component } from '@angular/core';

@Component({
  selector: 'app-supercattivi',
  templateUrl: './supercattivi.component.html',
  styleUrls: ['./supercattivi.component.css']
})
export class SupercattiviComponent {
  supercattivi = [
    {nome: 'Joker', emoji: '🤡'},
    {nome: 'Bane', emoji: '💪'},
    {nome: 'Spaventapasseri', emoji: '💀'},
    {nome: 'Hugo Strange', emoji: '🧠'},
    {nome: 'Enigmista', emoji: '❓'}
  ]
}
