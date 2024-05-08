import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniMeteo';

  nome: any;
  lat: any;
  long: any;
  paese: any;
  descrizione: any;
  temp_minima: any;
  temp: any;
  temp_massima: any;
  pressione: any;
  vento_velocita: any;
  vento_direzione: any;
  alba: any;
  tramonto: any;
  ult_agg: any;

  getMeteo(localita: string, lingua: string) {

    //per controllare il funzionamento
    /*
    alert("Località: " + localita)
    alert("Lingua: " + lingua)
    */
    
    if (!localita.trim()) {
      alert('Inserisci una località.');
      return;
    }

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + localita + '&appid=c96e54625d78e023eeebfaf36272212f&units=metric&lang=' + lingua)
    .then(response => response.json())
    .then(data => {
      this.nome = data['name'];
      if (this.nome == null) {
        alert('Inserisci una località esistente.');
        return;
      } else {
        this.descrizione = data['weather'][0]['description'];
        this.lat = data['coord']['lat'];
        this.long = data['coord']['lon'];
        this.paese = data['sys']['country'];
        this.temp_minima = data['main']['temp_min'] + '° C';
        this.temp = data['main']['temp'] + "° C";
        this.temp_massima = data['main']['temp_max'] + '° C';
        this.pressione = data['main']['pressure'] + ' hPa';
        this.vento_velocita = data['wind']['speed'] + 'm/s';
        this.vento_direzione = data['wind']['deg'] + '°';
        this.alba = new Date(data['sys']['sunrise'] * 1000);
        this.tramonto = new Date(data['sys']['sunset'] * 1000);
        this.ult_agg = new Date(data['dt'] * 1000);
      }
    })}
}
