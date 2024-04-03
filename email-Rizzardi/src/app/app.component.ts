import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-Rizzardi';

  mittente: string = '';
  destinatario: string = '';
  oggetto: string = '';
  testo: string = '';
  emails: { oggetto: string, mittente: string, destinatario: string, testo: string }[] = [];

  salvaEmail() {
    if (!this.mittente || !this.destinatario || !this.oggetto || !this.testo) {
      alert('Compila i campi');
      return false;
    }
  
    const email = { oggetto: this.oggetto, mittente: this.mittente, destinatario: this.destinatario, testo: this.testo };
    this.emails.push(email);
   
    this.mittente = '';
    this.destinatario = '';
    this.oggetto = '';
    this.testo = '';
  
    return false;
  }
}
