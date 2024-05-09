import { Component, ɵallowSanitizationBypassAndThrow } from '@angular/core';

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
  icon: any;
  
  getMeteo(localita: string, lingua: string, unitMis: string) {
    
    const unitaMisura: {[key: string]: string[]} = {
      'standard': ['K', 'hPa', 'm/s'],
      'metric': ['°C', 'hPa', 'm/s'],
      'imperial': ['°F', 'hPa', 'mph']
    };

    //per controllare il funzionamento
    /*
    alert("Località: " + localita)
    alert("Lingua: " + lingua)
    alert("Unità di misura: " + unitMis)
    */

    if (!localita.trim()) {
      alert('Inserisci una località.');
      return;
    }

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + localita + '&appid=c96e54625d78e023eeebfaf36272212f&units='+ unitMis +'&lang=' + lingua)
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

        const unita = unitaMisura[unitMis];
        this.temp_minima = data['main']['temp_min'] + unita[0];
        this.temp = data['main']['temp'] + unita[0];
        this.temp_massima = data['main']['temp_max'] + unita[0];
        this.pressione = data['main']['pressure'] + unita[1];
        this.vento_velocita = data['wind']['speed'] + unita[2];

        this.vento_direzione = data['wind']['deg'] + '°';
        this.alba = new Date(data['sys']['sunrise'] * 1000);
        this.tramonto = new Date(data['sys']['sunset'] * 1000);
        this.ult_agg = new Date(data['dt'] * 1000);
        this.icon =  "http://openweathermap.org/img/w/" +  data['weather'][0]['icon'] + ".png";
      }
    })}
}
