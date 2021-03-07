import { Component, OnInit } from '@angular/core';
import { CargarScriptsService }  from './../../services/cargar-scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService){
    _CargaScripts.Carga([
      "header"
    ])
  }

  ngOnInit(): void {
  }

}
