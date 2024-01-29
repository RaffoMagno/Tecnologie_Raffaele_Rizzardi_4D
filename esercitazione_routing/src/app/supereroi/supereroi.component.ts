import { Component } from '@angular/core';

@Component({
  selector: 'app-supereroi',
  templateUrl: './supereroi.component.html',
  styleUrls: ['./supereroi.component.css']
})
export class SupereroiComponent {
  supereroi = [
    {nome: 'Batman', emoji: '🦇'},
    {nome: 'Superman', emoji: '🦸‍♂️'},
    {nome: 'Wonder Woman', emoji: '⚔'},
    {nome: 'Batgirl', emoji: '🦇'},
    {nome: 'Lanterna Verde', emoji: '🏮🟩'}
  ]
}
