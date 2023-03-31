import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-politica-de-la-calidad',
  templateUrl: './politica-de-la-calidad.component.html',
  styleUrls: ['./politica-de-la-calidad.component.css']
})
export class PoliticaDeLaCalidadComponent implements OnInit {
  title = 'SGC | POLÍTICA DE CALIDAD';

  constructor(private titleService: Title) { 
    this.loadScripts();
   }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  loadScripts() {
    const dynamicScripts = [
     '../assets/plugins/js/custom.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  
  }

}
