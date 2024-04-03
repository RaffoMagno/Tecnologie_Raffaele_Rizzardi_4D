import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() emails: any[] = [];

  toggleEmail(index: number) {
    this.emails[index].espansa = !this.emails[index].espansa;
  }

  evidenziaSpeciale(index: number) {
    this.emails[index].evidenziato = !this.emails[index].evidenziato;
  }
}