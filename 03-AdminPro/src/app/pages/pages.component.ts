import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

//EJECUTA EL CUSTOM.JS DEL INDEX.HTML (INICIALIZA PLUGINS DE JS) -> ERROR DE VISUALIZACIÓN AL LOGUEARSE.
declare function initPlugins():any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor( private settingsService:SettingsService ) {}
  
  ngOnInit(): void {
    initPlugins();
  }


}
