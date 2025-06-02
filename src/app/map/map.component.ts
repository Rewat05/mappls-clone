import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'] 
})
export class MapComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.loadMapScript().then(() => {
      this.initializeMap();
    });
  }

  loadMapScript(): Promise<boolean> {
    return new Promise((resolve) => {
      if (document.getElementById('mapmyindia-script')) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.id = 'mapmyindia-script';
      script.src = 'https://apis.mapmyindia.com/advancedmaps/v1/eaf710c72d5ce0c81b4a9f611bd31110/map_load?v=1.5';
      script.onload = () => {
        resolve(true);
      };
      document.body.appendChild(script);
    });
  }

  initializeMap(): void {
    // @ts-ignore
    const map = new window.MapmyIndia.Map('map', {
      center: [28.6139, 77.2090], // Delhi
      zoom: 10
    });
  }
}


